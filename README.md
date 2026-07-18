# LearnStack

A small, static course-catalog frontend (React + Vite), built specifically as a
**Kubernetes hands-on project** — the UI takes minutes to build; the point is the
deployment pipeline behind it: Docker multi-stage build → nginx → kind cluster →
Deployment/Service/Ingress, with health probes and a rollout demo.

## Stack
- React 19 + Vite (static build, no backend, no database)
- Docker (multi-stage: `node:20-alpine` build → `nginx:1.27-alpine` serve)
- Kubernetes manifests for a `kind` cluster (Deployment, Service, Ingress, readiness/liveness probes)
- `docker-compose.yml` for a quick local sanity check before touching k8s

## Run it
See [COMMANDS.md](./COMMANDS.md) for the full build → containerize → deploy walkthrough.

```bash
npm install && npm run dev   # local dev
docker compose up --build    # containerized, no k8s
```

## Project layout
```
src/            React app (components, static course data)
Dockerfile      multi-stage build → nginx
nginx.conf      serves the SPA, exposes /healthz for probes
docker-compose.yml
k8s/            namespace, deployment, service, ingress
kind-config.yaml  kind cluster with ports mapped for ingress-nginx
COMMANDS.md     step-by-step: build, load into kind, deploy, demo a rollout
```
