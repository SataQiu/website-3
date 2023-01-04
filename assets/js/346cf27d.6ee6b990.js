"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[8364],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=d(n),p=o,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2256:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={},s="Load Aware Descheduling",d={unversionedId:"user-manuals/load-aware-descheduling",id:"version-v1.1/user-manuals/load-aware-descheduling",title:"Load Aware Descheduling",description:"The load-aware scheduling supported in the scheduler can select nodes with lower loads to run new Pods during scheduling, but as time, cluster environment changes, and changes in traffic/requests faced by workloads, the utilization of nodes will change dynamically Changes in the cluster will break the original load balance between nodes in the cluster, and even extreme load imbalance may occur, affecting the runtime quality of the workload.",source:"@site/versioned_docs/version-v1.1/user-manuals/load-aware-descheduling.md",sourceDirName:"user-manuals",slug:"/user-manuals/load-aware-descheduling",permalink:"/docs/user-manuals/load-aware-descheduling",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/load-aware-descheduling.md",tags:[],version:"v1.1",lastUpdatedBy:"Joseph",lastUpdatedAt:1672820533,formattedLastUpdatedAt:"1/4/2023",frontMatter:{},sidebar:"docs",previous:{title:"Load Aware Scheduling",permalink:"/docs/user-manuals/load-aware-scheduling"},next:{title:"Fine-grained CPU Orchestration",permalink:"/docs/user-manuals/fine-grained-cpu-orchestration"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Installation",id:"installation",level:3},{value:"Global Configuration via plugin args",id:"global-configuration-via-plugin-args",level:3},{value:"Use Load Aware Descheduling",id:"use-load-aware-descheduling",level:2}],h={toc:u};function p(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"load-aware-descheduling"},"Load Aware Descheduling"),(0,r.kt)("p",null,"The load-aware scheduling supported in the scheduler can select nodes with lower loads to run new Pods during scheduling, but as time, cluster environment changes, and changes in traffic/requests faced by workloads, the utilization of nodes will change dynamically Changes in the cluster will break the original load balance between nodes in the cluster, and even extreme load imbalance may occur, affecting the runtime quality of the workload."),(0,r.kt)("p",null,"koord-descheduler perceives changes in the load of nodes in the cluster, automatically optimizes nodes that exceed the safety load to prevents extreme load imbalance."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The LowNodeLoad plugin in the koord-descheduler is responsible for sensing the load of the node, and reducing the load hotspot by evict/migrate Pod. The ",(0,r.kt)("inlineCode",{parentName:"p"},"LowNodeLoad")," plugin is different from the Kubernetes native descheduler plugin LowNodeUtilization in that ",(0,r.kt)("inlineCode",{parentName:"p"},"LowNodeLoad")," decides to deschedule based on the actual utilization of nodes, while LowNodeUtilization decides to deschedule based on the resource allocation."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LowNodeLoad")," plugin has two most important parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"highThresholds")," defines the target usage threshold of resources. The Pods on nodes exceeding this threshold will be evicted/migrated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lowThresholds")," defines the low usage threshold of resources. The Pods on nodes below this threshold will not be evicted/migrated.")),(0,r.kt)("p",null,"Take the following figure as an example, ",(0,r.kt)("inlineCode",{parentName:"p"},"lowThresholds")," is 45%, ",(0,r.kt)("inlineCode",{parentName:"p"},"highThresholds")," is 70%, we can classify nodes into three categories:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Idle Node. Nodes with resource utilization below 45%;"),(0,r.kt)("li",{parentName:"ol"},"Normal Node. For nodes whose resource utilization is higher than 45% but lower than 70%, this load water level range is a reasonable range we expect"),(0,r.kt)("li",{parentName:"ol"},"Hotspot Node. If the node resource utilization rate is higher than 70%, the node will be judged as unsafe and belongs to the hotspot node, and some pods should be expelled to reduce the load level so that it does not exceed 70%.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(8609).Z,width:"2828",height:"926"})),(0,r.kt)("p",null,"After identifying which nodes are hotspots, descheduler will perform a eviction/migration operation to evict some Pods from hotspot nodes to idle nodes."),(0,r.kt)("p",null,"If the total number of idle nodes in a cluster is not many, descheduling will be terminated. This can be helpful in large clusters where some nodes may be underutilized frequently or for short periods of time. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"numberOfNodes")," is set to zero. This capability can be enabled by setting the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"numberOfNodes"),".\nBefore migration, descheduler will calculate the actual free capacity to ensure that the sum of the actual utilization of the Pods to be migrated does not exceed the total free capacity in the cluster. These actual free capacities come from idle nodes, and the actual free capacity of an idle node = ",(0,r.kt)("inlineCode",{parentName:"p"},"(highThresholds - current load of the node) * total capacity of the node"),". Suppose the load level of node A is 20%, the highThresholdss is 70%, and the total CPU of node A is 96C, then ",(0,r.kt)("inlineCode",{parentName:"p"},"(70%-20%) * 96 = 48C"),", and this 48C is the free capacity that can be carried."),(0,r.kt)("p",null,"In addition, when migrating hotspot nodes, the Pods on the nodes will be filtered. Currently, descheduler supports multiple filtering parameters, which can avoid migration and expulsion of very important Pods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Filter by namespace. Can be configured to filter only certain namespaces or filter out certain namespaces"),(0,r.kt)("li",{parentName:"ul"},"Filter by pod selector. Pods can be filtered out through the label selector, or Pods with certain Labels can be excluded"),(0,r.kt)("li",{parentName:"ul"},"Configure ",(0,r.kt)("inlineCode",{parentName:"li"},"nodeFit")," to check whether the scheduling rules have candidate nodes. When enabled, descheduler checks whether there is a matching Node in the cluster according to the Node Affinity/Node Selector/Toleration corresponding to the candidate Pod. If not, the Pod will not be evicted for migration. If you set ",(0,r.kt)("inlineCode",{parentName:"li"},"nodeFit")," to false, the migration controller in the descheduler will complete the capacity reservation at this time, and start the migration after ensuring that there are resources.")),(0,r.kt)("p",null,"After the Pods are filtered out, these Pods are sorted from multiple dimensions such as QoSClass, Priority, actual usage, and creation time."),(0,r.kt)("p",null,"After pods have been filtered and sorted, the migration operation begins. Before migration, it will check whether the remaining free capacity is satisfied and whether the load the current node is higher than the target safety threshold. If one of these two conditions cannot be met, descheduling will stop. Every time a Pod is migrated, the remaining free capacity will be withheld, and the load of the current node will be adjusted at the same time until the remaining capacity is insufficient or the load reaches the safety threshold."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,r.kt)("li",{parentName:"ul"},"Koordinator >= 1.1.0")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),"."),(0,r.kt)("h3",{id:"global-configuration-via-plugin-args"},"Global Configuration via plugin args"),(0,r.kt)("p",null,"Load-aware descheduling is ",(0,r.kt)("em",{parentName:"p"},"Disabled")," by default. You can modify the ConfigMap ",(0,r.kt)("inlineCode",{parentName:"p"},"koord-descheduler-config")," to enable the plugin."),(0,r.kt)("p",null,"For users who need deep insight, please configure the rules of load-aware descheduling by modifying the ConfigMap\n",(0,r.kt)("inlineCode",{parentName:"p"},"koord-descheduler-config")," in the helm chart. New configurations will take effect after the koord-descheduler restarts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: koord-descheduler-config\n  ...\ndata:\n  koord-descheduler-config: |\n    apiVersion: descheduler/v1alpha2\n    kind: DeschedulerConfiguration\n    ...\n    # Execute the LowNodeLoad plugin every 60s\n    deschedulingInterval: 60s  \n    profiles:\n      - name: koord-descheduler\n        plugins:\n          deschedule:\n            disabled:\n              - name: "*"\n          balance:\n            enabled:\n              - name: LowNodeLoad  # Configure to enable the LowNodeLoad plugin\n          ....\n        pluginConfig:\n        - name: LowNodeLoad\n          args:\n            apiVersion: descheduler/v1alpha2\n            kind: LowNodeLoadArgs\n            evictableNamespaces:\n            # include and exclude are mutually exclusive, only one of them can be configured.\n            # include indicates that only the namespace configured below will be processed\n            # include:\n            #   - test-namespace\n              # exclude means to only process namespaces other than those configured below\n              exclude:\n                - "kube-system"\n                - "koordinator-system"\n            # lowThresholds defines the low usage threshold of resources\n            lowThresholds:\n              cpu: 20\n              memory: 30\n            # highThresholds defines the target usage threshold of resources\n            highThresholds:\n              cpu: 50\n              memory: 60\n        ....\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"numberOfNodes"),(0,r.kt)("td",{parentName:"tr",align:null},"NumberOfNodes can be configured to activate the strategy only when the number of under utilized nodes are above the configured value. This could be helpful in large clusters where a few nodes could go under utilized frequently or for a short period of time. By default, NumberOfNodes is set to zero."),(0,r.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"evictableNamespaces"),(0,r.kt)("td",{parentName:"tr",align:null},"Naming this one differently since namespaces are still considered while considering resources used by pods but then filtered out before eviction."),(0,r.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodeSelector"),(0,r.kt)("td",{parentName:"tr",align:null},"NodeSelector selects the nodes that matched labelSelector."),(0,r.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"podSelectors"),(0,r.kt)("td",{parentName:"tr",align:null},"PodSelectors selects the pods that matched labelSelector."),(0,r.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodeFit"),(0,r.kt)("td",{parentName:"tr",align:null},"NodeFit if enabled, it will check whether the candidate Pods have suitable nodes, including NodeAffinity, TaintTolerance, and whether resources are sufficient. By default, NodeFit is set to true."),(0,r.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useDeviationThresholds"),(0,r.kt)("td",{parentName:"tr",align:null},"If UseDeviationThresholds is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the thresholds are considered as percentage deviations from mean resource usage. ",(0,r.kt)("inlineCode",{parentName:"td"},"lowThresholds")," will be deducted from the mean among all nodes and ",(0,r.kt)("inlineCode",{parentName:"td"},"highThresholds")," will be added to the mean. A resource consumption above (resp. below) this window is considered as overutilization (resp. underutilization)."),(0,r.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"highThresholds"),(0,r.kt)("td",{parentName:"tr",align:null},"HighThresholds defines the target usage threshold of resources"),(0,r.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lowThresholds"),(0,r.kt)("td",{parentName:"tr",align:null},"LowThresholds defines the low usage threshold of resources"),(0,r.kt)("td",{parentName:"tr",align:null},">= v1.1.0")))),(0,r.kt)("h2",{id:"use-load-aware-descheduling"},"Use Load Aware Descheduling"),(0,r.kt)("p",null,"The example cluster in this article has three 4-core 16GiB nodes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deploy a ",(0,r.kt)("inlineCode",{parentName:"li"},"stress")," pod with the YAML file below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: stress-demo\n  namespace: default\n  labels:\n    app: stress-demo\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: stress-demo\n  template:\n    metadata:\n      name: stress-demo\n      labels:\n        app: stress-demo\n    spec:\n      containers:\n        - args:\n            - '--vm'\n            - '2'\n            - '--vm-bytes'\n            - '1600M'\n            - '-c'\n            - '2'\n            - '--vm-hang'\n            - '2'\n          command:\n            - stress\n          image: polinux/stress\n          imagePullPolicy: Always\n          name: stress\n          resources:\n            limits:\n              cpu: '2'\n              memory: 4Gi\n            requests:\n              cpu: '2'\n              memory: 4Gi\n      restartPolicy: Always\n      schedulerName: koord-scheduler # use the koord-scheduler\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f stress-demo.yaml\ndeployment.apps/stress-demo created\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Watch the pod status util it becomes running.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -o wide\nNAME                           READY   STATUS    RESTARTS   AGE   IP           NODE                    NOMINATED NODE   READINESS GATES\nstress-demo-7fdd89cc6b-gcnzn   1/1     Running   0          82s   10.0.3.114   cn-beijing.10.0.3.112   <none>           <none>\n")),(0,r.kt)("p",null,"The pod ",(0,r.kt)("inlineCode",{parentName:"p"},"stress-demo-7fdd89cc6b-gcnzn")," is scheduled on ",(0,r.kt)("inlineCode",{parentName:"p"},"cn-beijing.10.0.3.112"),"."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Check the load of each node.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl top node\nNAME                    CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%\ncn-beijing.10.0.3.110   92m          2%     1158Mi          9%\ncn-beijing.10.0.3.111   77m          1%     1162Mi          9%\ncn-beijing.10.0.3.112   2105m        53%    3594Mi          28%\n")),(0,r.kt)("p",null,"In above order, ",(0,r.kt)("inlineCode",{parentName:"p"},"cn-beijing.10.0.3.112")," has the highest load, while ",(0,r.kt)("inlineCode",{parentName:"p"},"cn-beijing.10.0.3.111")," has the lowest load."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update ",(0,r.kt)("inlineCode",{parentName:"p"},"koord-descheduler-config")," to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"LowNodeLoad")," plugin.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Observe the Pod changes and wait for the koord-descheduler to execute the eviction/migration operation."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -w\nNAME                           READY   STATUS               RESTARTS   AGE     IP           NODE                    NOMINATED NODE   READINESS GATES\nstress-demo-7fdd89cc6b-l7psv   1/1     Running              0          4m45s   10.0.3.127   cn-beijing.10.0.3.121   <none>           <none>\nstress-demo-7fdd89cc6b-l7psv   1/1     Terminating          0          8m34s   10.0.3.127   cn-beijing.10.0.3.121   <none>           <none>\nstress-demo-7fdd89cc6b-b4c5g   0/1     Pending              0          0s      <none>       <none>                  <none>           <none>\nstress-demo-7fdd89cc6b-b4c5g   0/1     Pending              0          0s      <none>       <none>                  <none>           <none>\nstress-demo-7fdd89cc6b-b4c5g   0/1     Pending              0          0s      <none>       cn-beijing.10.0.3.124   <none>           <none>\nstress-demo-7fdd89cc6b-b4c5g   0/1     ContainerCreating    0          0s      <none>       cn-beijing.10.0.3.124   <none>           <none>\nstress-demo-7fdd89cc6b-b4c5g   0/1     ContainerCreating    0          3s      <none>       cn-beijing.10.0.3.124   <none>           <none>\nstress-demo-7fdd89cc6b-b4c5g   1/1     Running              0          20s     10.0.3.130   cn-beijing.10.0.3.124   <none>           <none>\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Observe the Event, you can see the following migration records")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get event |grep stress-demo-7fdd89cc6b-l7psv\n2m45s       Normal    Evicting                  podmigrationjob/20c8c445-7fa0-4cf7-8d96-7f03bb1097d9   Try to evict Pod "default/stress-demo-7fdd89cc6b-l7psv"\n2m12s       Normal    EvictComplete             podmigrationjob/20c8c445-7fa0-4cf7-8d96-7f03bb1097d9   Pod "default/stress-demo-7fdd89cc6b-l7psv" has been evicted\n11m         Normal    Scheduled                 pod/stress-demo-7fdd89cc6b-l7psv                       Successfully assigned default/stress-demo-7fdd89cc6b-l7psv to cn-beijing.10.0.3.121\n11m         Normal    AllocIPSucceed            pod/stress-demo-7fdd89cc6b-l7psv                       Alloc IP 10.0.3.127/24\n11m         Normal    Pulling                   pod/stress-demo-7fdd89cc6b-l7psv                       Pulling image "polinux/stress"\n10m         Normal    Pulled                    pod/stress-demo-7fdd89cc6b-l7psv                       Successfully pulled image "polinux/stress" in 12.687629736s\n10m         Normal    Created                   pod/stress-demo-7fdd89cc6b-l7psv                       Created container stress\n10m         Normal    Started                   pod/stress-demo-7fdd89cc6b-l7psv                       Started container stress\n2m14s       Normal    Killing                   pod/stress-demo-7fdd89cc6b-l7psv                       Stopping container stress\n11m         Normal    SuccessfulCreate          replicaset/stress-demo-7fdd89cc6b                      Created pod: stress-demo-7fdd89cc6b-l7psv\n')))}p.isMDXComponent=!0},8609:function(e,t,n){t.Z=n.p+"assets/images/low-node-load-3482df7bbffd96dc550f617ed99ff389.png"}}]);