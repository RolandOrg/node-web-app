# GitOps with Tekton and ArgoCD( Simple Node JS App Soup to Nuts: From DeskTop Docker to OpenShift Cluster )

This is a simple tutorial that helped me get an understanding of Tekton and ArgoCD.  

### Clone this repo
```
git clone https://github.com/RolandOrg/node_web_app.git

cd node_web_app
```

### Run Node App and Test Locally with Docker 

The Node Applicaiton is created following this tutorial simulating how a new user might learn to containerize a Node App.  
[Dockerizing a Node.js web app](https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/)

1. To run the applicaiton locally, [Install Docker Desktop](https://www.docker.com/products/docker-desktop) or you could use [podman](https://podman.io/) on Linux (This assumes you use podman CLI instead of docker.  Substitute docker <command> with podman <command>)

2. You can run the app locally if you have [node](https://nodejs.org/en/) installed

```
npm install 
node server.js

```

3. Since you have the code, docker build

```
docker build -t <your username>/node-web-app .
```
4. Run the applicaiton in a container.
```
docker run -p 49160:8080 -d <your username>/node-web-app

```

5. Check that the container is running.
```
docker ps
```

6. Test the Application 

```
curl -i localhost:49160

```


### Install ArgoCD Operator onto OpenShift 

### Install OpenShift Pipeline Operator 

### Create App ArgoCD to point to Git Repo 

### Sync Repo 
Resources should be created but the deployments fail to start.  

### Create OCP Project 
Name the Project -> node-web-project
OR Change all namespaces in the YAML File to match your project  

### Allow Pipeline to access registry for build and deploy
```
oc policy add-role-to-user registry-editor builder

oc policy add-role-to-user registry-editor deployer
```

### Run Pipeline 

### Look at app 




