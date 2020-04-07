# GitOps with Tekton and ArgoCD( Simple Node JS App Soup to Nuts: From DeskTop Docker to OpenShift Cluster )

This is a simple tutorial that helped me get an understanding of Tekton and ArgoCD.  

### Clone this repo

### Run Node App and Test Locally with Docker 

### Install ArgoCD Operator onto OpenShift 

### Install OpenShift Pipeline Operator 

### Create App ArgoCD to point to Git Repo 

### Sync Repo 
Resources should be created but the deployments fail to start.  

### Create OCP Project 
Name the Project -> node-web-project
OR Change all namespaces in the YAML File to match your project  

### Allow Pipeline to access registry for build and deploy
`
- oc policy add-role-to-user registry-editor builder
- oc policy add-role-to-user registry-editor deployer
`



