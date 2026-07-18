# LearnStack — Build, Containerize, Deploy on kind

## 1. Local dev (optional sanity check)
```bash
npm install
npm run dev          # http://localhost:5173
npm run build         # produces dist/
```

## 2. Docker — build & run standalone
```bash
docker build -t learnstack:latest .
docker run --rm -p 8080:80 learnstack:latest
# or
docker compose up --build
# visit http://localhost:8080
```

## 3. Create a kind cluster (ingress-ready)
```bash
kind create cluster --name learnstack --config kind-config.yaml
kubectl cluster-info --context kind-learnstack
```

## 4. Install the ingress-nginx controller
```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=120s
```

## 5. Load the image into kind
kind clusters don't pull from your local Docker daemon automatically —
the image has to be explicitly loaded into the cluster's node.
```bash
kind load docker-image learnstack:latest --name learnstack
```

## 6. Apply the manifests
```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml

kubectl get pods -n learnstack -w
```

## 7. Access the app
Add a local host entry, then open it in the browser:
```bash
echo "127.0.0.1 learnstack.local" | sudo tee -a /etc/hosts
```
Visit **http://learnstack.local**

Or skip the ingress and port-forward directly:
```bash
kubectl port-forward -n learnstack svc/learnstack-svc 8080:80
# visit http://localhost:8080
```

## 8. Useful checks while demoing
```bash
kubectl get all -n learnstack
kubectl describe deployment learnstack-web -n learnstack
kubectl logs -n learnstack -l app=learnstack --tail=50
kubectl rollout status deployment/learnstack-web -n learnstack
```

## 9. Simulate a rollout (great for a LinkedIn demo clip)
```bash
kubectl scale deployment learnstack-web -n learnstack --replicas=4
kubectl rollout restart deployment/learnstack-web -n learnstack
kubectl rollout history deployment/learnstack-web -n learnstack
```

## 10. Tear down
```bash
kind delete cluster --name learnstack
```
