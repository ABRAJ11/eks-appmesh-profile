(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"canary-releases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canary-releases","aria-hidden":"true"}},[a._v("#")]),a._v(" Canary Releases")]),a._v(" "),s("p",[a._v("To experiment with progressive delivery, you'll be using a small Go application called\n"),s("a",{attrs:{href:"https://github.com/stefanprodan/prodinfo",target:"_blank",rel:"noopener noreferrer"}},[a._v("podinfo"),s("OutboundLink")],1),a._v(".\nThe demo app is exposed outside the cluster with an Envoy proxy (ingress) and an ELB.\nThe communication between the ingress and podinfo is managed by Flagger and App Mesh.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("base/demo/\n├── namespace.yaml\n├── ingress "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Envoy proxy")]),a._v("\n│   ├── config.yaml\n│   ├── deployment.yaml\n│   ├── service.yaml\n│   └── virtual-node.yaml\n├── podinfo "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Demo app")]),a._v("\n│   ├── canary.yaml\n│   ├── deployment.yaml\n│   └── hpa.yaml\n└── tester "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Flagger test runner")]),a._v("\n    ├── deployment.yaml\n    ├── service.yaml\n    └── virtual-node.yaml\n")])])]),s("p",[a._v("For apps running on App Mesh, you can configure Flagger with a Kubernetes custom resource\nto automate the conformance testing, analysis and promotion of a canary release.")]),a._v(" "),s("p",[s("img",{attrs:{src:"/eks-appmesh-flagger-stack.png",alt:"App Mesh Canary Release"}})]),a._v(" "),s("h2",{attrs:{id:"canary-custom-resource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canary-custom-resource","aria-hidden":"true"}},[a._v("#")]),a._v(" Canary custom resource")]),a._v(" "),s("p",[a._v("A canary release is described with a Kubernetes custom resource named "),s("strong",[a._v("Canary")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" flagger.app/v1alpha3\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Canary\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" podinfo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("targetRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" apps/v1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Deployment\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" podinfo\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("autoscalerRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" autoscaling/v2beta1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" HorizontalPodAutoscaler\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" podinfo\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9898")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("meshName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" appmesh\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("canaryAnalysis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("interval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 10s\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stepWeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("maxWeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("threshold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metrics")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("rate\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("threshold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("99")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("interval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 1m\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("duration\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("threshold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("500")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("interval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 1m\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("webhooks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" load"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("test\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//flagger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("loadtester.demo/\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cmd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hey -z 2m -q 10 -c 2 http://podinfo.demo:9898/"')]),a._v("\n")])])]),s("p",[a._v("Flagger takes a Kubernetes deployment and optionally a horizontal pod autoscaler (HPA),\nthen creates a series of objects (Kubernetes deployments, ClusterIP services, App Mesh virtual nodes and services).\nThese objects expose the application on the mesh and drive the canary analysis and promotion.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# applied ")]),a._v("\ndeployment.apps/podinfo\nhorizontalpodautoscaler.autoscaling/podinfo\ncanary.flagger.app/podinfo\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# generated Kubernetes objects")]),a._v("\ndeployment.apps/podinfo-primary\nhorizontalpodautoscaler.autoscaling/podinfo-primary\nservice/podinfo\nservice/podinfo-canary\nservice/podinfo-primary\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# generated App Mesh objects")]),a._v("\nvirtualnode.appmesh.k8s.aws/podinfo\nvirtualnode.appmesh.k8s.aws/podinfo-canary\nvirtualnode.appmesh.k8s.aws/podinfo-primary\nvirtualservice.appmesh.k8s.aws/podinfo.test\nvirtualservice.appmesh.k8s.aws/podinfo-canary.test\n")])])]),s("h2",{attrs:{id:"application-bootstrap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-bootstrap","aria-hidden":"true"}},[a._v("#")]),a._v(" Application bootstrap")]),a._v(" "),s("p",[a._v("Install the demo app by setting "),s("code",[a._v("fluxcd.io/ignore")]),a._v(" to "),s("code",[a._v("false")]),a._v(" in "),s("code",[a._v("base/demo/namespace.yaml")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v("EOF "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" base/demo/namespace.yaml\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: demo\n  annotations:\n    fluxcd.io/ignore: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"false"')]),a._v("\n  labels:\n    appmesh.k8s.aws/sidecarInjectorWebhook: enabled\nEOF\n")])])]),s("p",[a._v("Apply changes:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" -A "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"init demo"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin master "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),a._v(" --k8s-fwd-ns flux\n")])])]),s("p",[a._v("Wait for Flagger to initialize the canary:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("watch")]),a._v(" kubectl -n demo get canary\n")])])]),s("p",[a._v("Find the ingress public address with:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("kubectl -n demo get svc/ingress -ojson "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq -r .status.loadBalancer.ingress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".hostname"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),s("p",[a._v("Wait for the ingress DNS to propagate:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("watch")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$URL")]),a._v("\n")])])]),s("p",[a._v("Wait for the podinfo to become accessible:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("watch")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$URL")]),a._v("\n")])])]),s("p",[a._v("When the ingres address becomes available, open it in a browser and you'll see the podinfo UI.")]),a._v(" "),s("p",[s("img",{attrs:{src:"/podinfo.png",alt:"podinfo"}})]),a._v(" "),s("h2",{attrs:{id:"automated-canary-promotion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automated-canary-promotion","aria-hidden":"true"}},[a._v("#")]),a._v(" Automated canary promotion")]),a._v(" "),s("p",[a._v("When you deploy a new podinfo version, Flagger gradually shifts traffic to the canary,\nand at the same time, measures the requests success rate as well as the average response duration.\nBased on an analysis of these App Mesh provided metrics, a canary deployment is either promoted or rolled back.")]),a._v(" "),s("p",[a._v("Create a Kustomize patch for the podinfo deployment in "),s("code",[a._v("overlays/podinfo.yaml")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p overlays "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v("EOF "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" overlays/podinfo.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: podinfo\n  namespace: demo\nspec:\n  template:\n    spec:\n      containers:\n        - name: podinfod\n          image: stefanprodan/podinfo:3.1.1\n          env:\n            - name: PODINFO_UI_LOGO\n              value: https://raw.githubusercontent.com/weaveworks/eks-appmesh-profile/website/logo/amazon-eks-wide.png\nEOF\n")])])]),s("p",[a._v("Add the patch to the kustomization file:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v("EOF "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" kustomization.yaml\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nbases:\n  - base\n  - flux\npatchesStrategicMerge:\n  - overlays/podinfo.yaml\nEOF\n")])])]),s("p",[a._v("Apply changes:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" -A "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"patch podinfo"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin master "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),a._v(" --k8s-fwd-ns flux\n")])])]),s("p",[a._v("When Flagger detects that the deployment revision changed it will start a new rollout.\nYou can monitor the traffic shifting with:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("watch")]),a._v(" kubectl -n demo get canaries\n")])])]),s("p",[a._v("Watch Flagger logs:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("kubectl -n appmesh-system logs deployment/flagger -f "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq .msg\n")])])]),s("h2",{attrs:{id:"automated-rollback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automated-rollback","aria-hidden":"true"}},[a._v("#")]),a._v(" Automated rollback")]),a._v(" "),s("p",[a._v("During the canary analysis you can generate HTTP 500 errors and high latency to test if Flagger pauses and\nrolls back the faulted version.")]),a._v(" "),s("p",[a._v("Trigger another canary release:")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[a._v("cat <<EOF "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" overlays/podinfo.yaml\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" apps/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" podinfo\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" demo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" podinfod\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" stefanprodan/podinfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("3.1.2\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" PODINFO_UI_LOGO\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//raw.githubusercontent.com/weaveworks/eks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("appmesh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("profile/website/logo/amazon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("eks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("wide.png\nEOF\n")])])]),s("p",[a._v("Apply changes:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" -A "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"update podinfo"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin master "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),a._v(" --k8s-fwd-ns flux\n")])])]),s("p",[a._v("Exec into the tester pod and generate HTTP 500 errors:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("kubectl -n demo "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("kubectl -n demo get pods -o name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" -m1 flagger-loadtester "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cut")]),a._v(" -d"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/'")]),a._v(" -f "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n\n$ hey -z 1m -c "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" -q "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" http://podinfo-canary.demo:9898/status/500\n$ hey -z 1m -c "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" -q "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" http://podinfo-canary.demo:9898/delay/1\n")])])]),s("p",[a._v("When the number of failed checks reaches the canary analysis threshold, the traffic is routed back to the primary and\nthe canary is scaled to zero.")]),a._v(" "),s("p",[a._v("Watch Flagger logs with:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ kubectl -n appmesh-system logs deployment/flagger -f | jq .msg\n\n Starting canary analysis for podinfo.prod\n Advance podinfo.test canary weight 5\n Advance podinfo.test canary weight 10\n Advance podinfo.test canary weight 15\n Halt podinfo.test advancement success rate 69.17% < 99%\n Halt podinfo.test advancement success rate 61.39% < 99%\n Halt podinfo.test advancement success rate 55.06% < 99%\n Halt podinfo.test advancement request duration 1.20s > 0.5s\n Halt podinfo.test advancement request duration 1.45s > 0.5s\n Rolling back podinfo.prod failed checks threshold reached 5\n Canary failed! Scaling down podinfo.test\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);