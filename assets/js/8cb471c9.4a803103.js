"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[7758],{3905:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return p}});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=u(a),p=i,m=g["".concat(s,".").concat(p)]||g[p]||c[p]||o;return a?t.createElement(m,r(r({ref:n},d),{},{components:a})):t.createElement(m,r({ref:n},d))}));function p(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},42:function(e,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var t=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={},s="GangScheduling",u={unversionedId:"user-manuals/gang-scheduling",id:"user-manuals/gang-scheduling",title:"GangScheduling",description:"Introduction",source:"@site/docs/user-manuals/gang-scheduling.md",sourceDirName:"user-manuals",slug:"/user-manuals/gang-scheduling",permalink:"/docs/next/user-manuals/gang-scheduling",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/gang-scheduling.md",tags:[],version:"current",lastUpdatedBy:"buptcozy",lastUpdatedAt:1665372339,formattedLastUpdatedAt:"10/10/2022",frontMatter:{}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Installation",id:"installation",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Use GangScheduling",id:"use-gangscheduling",level:2},{value:"Quick Start",id:"quick-start",level:3},{value:"apply gang through gang crd",id:"apply-gang-through-gang-crd",level:4},{value:"apply gang through annotation",id:"apply-gang-through-annotation",level:4},{value:"device resource debug api:",id:"device-resource-debug-api",level:4},{value:"advanced configuration for gang",id:"advanced-configuration-for-gang",level:4},{value:"advanced configuration for scheduler",id:"advanced-configuration-for-scheduler",level:4}],g={toc:c};function p(e){var n=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,t.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gangscheduling"},"GangScheduling"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"We provide Gang mechanism for the scheduler to control pods binding opportunity. User can declare a resource-collection-minimum number,\nonly when assigned-resources reach the given limitation can trigger the binding. We provide ",(0,o.kt)("inlineCode",{parentName:"p"},"Strict")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NonStrict")," to\ncontrol the resource-accumulation-process by a configuration. We also provide a two-level Gang description for better matching\nthe real scenario, which is different from community."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,o.kt)("li",{parentName:"ul"},"Koordinator >= 0.70")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),"."),(0,o.kt)("h3",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"GangScheduling is ",(0,o.kt)("em",{parentName:"p"},"Enabled")," by default. You can use it without any modification on the koord-scheduler config."),(0,o.kt)("h2",{id:"use-gangscheduling"},"Use GangScheduling"),(0,o.kt)("h3",{id:"quick-start"},"Quick Start"),(0,o.kt)("h4",{id:"apply-gang-through-gang-crd"},"apply gang through gang crd"),(0,o.kt)("p",null,"1.create pod-group"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: PodGroup\nmetadata:\n  name: gang-example\n  namespace: default\nspec:\n  scheduleTimeoutSeconds: 100\n  minMember: 2\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pgs -n default\n  NAME           AGE\n  gang-example   13s\n")),(0,o.kt)("p",null,"2.create child pod1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-example1\n  namespace: default\n  labels:\n    pod-group.scheduling.sigs.k8s.io: gang-example\nspec:\n  schedulerName: koord-scheduler\n  containers:\n  - command:\n    - sleep\n    - 365d\n    image: busybox\n    imagePullPolicy: IfNotPresent\n    name: curlimage\n    resources:\n      limits:\n        cpu: 40m\n        memory: 40Mi\n      requests:\n        cpu: 40m\n        memory: 40Mi\n    terminationMessagePath: /dev/termination-log\n    terminationMessagePolicy: File\n  restartPolicy: Always\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -n default\n  NAME           READY   STATUS    RESTARTS   AGE\n  pod-example1   0/1     Pending   0          7s\n")),(0,o.kt)("p",null,"3.create child pod2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-example2\n  namespace: default\n  labels:\n    pod-group.scheduling.sigs.k8s.io: gang-example\nspec:\n  schedulerName: koord-scheduler\n  containers:\n  - command:\n    - sleep\n    - 365d\n    image: busybox\n    imagePullPolicy: IfNotPresent\n    name: curlimage\n    resources:\n      limits:\n        cpu: 40m\n        memory: 40Mi\n      requests:\n        cpu: 40m\n        memory: 40Mi\n    terminationMessagePath: /dev/termination-log\n    terminationMessagePolicy: File\n  restartPolicy: Always\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -n default\n  NAME           READY   STATUS    RESTARTS   AGE\n  pod-example1   1/1     Running   0          53s\n  pod-example2   1/1     Running   0          5s\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pg gang-example -n default -o yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: PodGroup\nmetadata:\n  creationTimestamp: "2022-10-09T09:08:17Z"\n  generation: 6\nspec:\n  minMember: 1\n  scheduleTimeoutSeconds: 100\nstatus:\n  phase: Running\n  running: 2\n  scheduled: 2\n')),(0,o.kt)("h4",{id:"apply-gang-through-annotation"},"apply gang through annotation"),(0,o.kt)("p",null,"1.create child pod1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-example1\n  namespace: default\n  annotations:\n    gang.scheduling.koordinator.sh/name: "gang-example"\n    gang.scheduling.koordinator.sh/min-available: "2"  \nspec:\n  schedulerName: koord-scheduler\n  containers:\n  - command:\n    - sleep\n    - 365d\n    image: busybox\n    imagePullPolicy: IfNotPresent\n    name: curlimage\n    resources:\n      limits:\n        cpu: 40m\n        memory: 40Mi\n      requests:\n        cpu: 40m\n        memory: 40Mi\n    terminationMessagePath: /dev/termination-log\n    terminationMessagePolicy: File\n  restartPolicy: Always\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -n default\n  NAME           READY   STATUS    RESTARTS   AGE\n  pod-example1   0/1     Pending   0          7s\n")),(0,o.kt)("p",null,"2.create child pod2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-example2\n  namespace: default\n  annotations:\n    gang.scheduling.koordinator.sh/name: "gang-example"\n    gang.scheduling.koordinator.sh/min-available: "2"  \nspec:\n  schedulerName: koord-scheduler\n  containers:\n  - command:\n    - sleep\n    - 365d\n    image: busybox\n    imagePullPolicy: IfNotPresent\n    name: curlimage\n    resources:\n      limits:\n        cpu: 40m\n        memory: 40Mi\n      requests:\n        cpu: 40m\n        memory: 40Mi\n    terminationMessagePath: /dev/termination-log\n    terminationMessagePolicy: File\n  restartPolicy: Always\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -n default\n  NAME           READY   STATUS    RESTARTS   AGE\n  pod-example1   1/1     Running   0          53s\n  pod-example2   1/1     Running   0          5s\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pg gang-example -n default -o yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: PodGroup\nmetadata:\n  creationTimestamp: "2022-10-09T09:08:17Z"\n  generation: 6\nspec:\n  minMember: 1\n  scheduleTimeoutSeconds: 100\nstatus:\n  phase: Running\n  running: 2\n  scheduled: 2\n')),(0,o.kt)("h4",{id:"device-resource-debug-api"},"device resource debug api:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl -n koordinator-system get lease koord-scheduler --no-headers | awk '{print $2}' | cut -d'_' -f1 | xargs -I {} kubectl -n koordinator-system get pod {} -o wide --no-headers | awk '{print $6}'\n  10.244.0.64\n\n$ curl 10.244.0.64:10251/apis/v1/plugins/Coscheduling/gang/default/gang-example\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "boundChildren": {\n        "default/pod-example1": {},\n        "default/pod-example2": {}\n    },\n    "children": {\n        "default/pod-example1": {},\n        "default/pod-example2": {}\n    },\n    "childrenScheduleRoundMap": {\n        "default/pod-example1": 2,\n        "default/pod-example2": 2\n    },\n    "createTime": "2022-10-09T07:31:53Z",\n    "gangFrom": "GangFromPodAnnotation",\n    "gangGroup": null,\n    "hasGangInit": true,\n    "minRequiredNumber": 2,\n    "mode": "Strict",\n    "name": "default/gang-example",\n    "onceResourceSatisfied": true,\n    "scheduleCycle": 2,\n    "scheduleCycleValid": true,\n    "totalChildrenNum": 2,\n    "waitTime": 600000000000,\n    "waitingForBindChildren": {}\n}\n')),(0,o.kt)("h4",{id:"advanced-configuration-for-gang"},"advanced configuration for gang"),(0,o.kt)("p",null,"1.apply through pod-group."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: PodGroup\nmetadata:\n  name: gang-example1\n  namespace: default\n  annotations:\n    gang.scheduling.koordinator.sh/total-number: "3"\n    gang.scheduling.koordinator.sh/mode: "NonStrict"\n    gang.scheduling.koordinator.sh/groups: "[\\"default/gang-example1\\", \\"default/gang-example2\\"]"\n    \nspec:\n  scheduleTimeoutSeconds: 100\n  minMember: 2\n  \n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gang.scheduling.koordinator.sh/total-number")," specifies the total children number of the gang. If not specified,it will be set with the ",(0,o.kt)("inlineCode",{parentName:"li"},"minMember")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gang.scheduling.koordinator.sh/mode")," defines the Gang Scheduling operation when failed scheduling. Support ",(0,o.kt)("inlineCode",{parentName:"li"},"Strict\\NonStrict"),", default is ",(0,o.kt)("inlineCode",{parentName:"li"},"Strict")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gang.scheduling.koordinator.sh/groups")," defines which gangs are bundled as a group. The gang will go to bind only all gangs in one group meet the conditions")),(0,o.kt)("p",null,"2.apply through pod annotations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-example2\n  namespace: default\n  annotations:\n    gang.scheduling.koordinator.sh/name: "gang-example1"\n    gang.scheduling.koordinator.sh/min-available: "2"  \n    gang.scheduling.koordinator.sh/total-number: "3"\n    gang.scheduling.koordinator.sh/mode: "Strict\\NonStrict"\n    gang.scheduling.koordinator.sh/groups: "[\\"default/gang-example1\\", \\"default/gang-example2\\"]"\n    gang.scheduling.koordinator.sh/waiting-time: "100s"\nspec:\n  schedulerName: koord-scheduler\n  containers:\n  - command:\n    - sleep\n    - 365d\n    image: busybox\n    imagePullPolicy: IfNotPresent\n    name: curlimage\n    resources:\n      limits:\n        cpu: 40m\n        memory: 40Mi\n      requests:\n        cpu: 40m\n        memory: 40Mi\n    terminationMessagePath: /dev/termination-log\n    terminationMessagePolicy: File\n  restartPolicy: Always\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gang.scheduling.koordinator.sh/total-number")," specifies the total children number of the gang. If not specified,it will be set with the ",(0,o.kt)("inlineCode",{parentName:"li"},"gang.scheduling.koordinator.sh/min-available")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gang.scheduling.koordinator.sh/mode")," defines the Gang Scheduling operation when failed scheduling. Support ",(0,o.kt)("inlineCode",{parentName:"li"},"Strict\\NonStrict"),", default is ",(0,o.kt)("inlineCode",{parentName:"li"},"Strict")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gang.scheduling.koordinator.sh/groups")," defines which gangs are bundled as a group. The gang will go to bind only all gangs in one group meet the conditions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gang.scheduling.koordinator.sh/waiting-time")," specifies gang's max wait time in Permit Stage.")),(0,o.kt)("h4",{id:"advanced-configuration-for-scheduler"},"advanced configuration for scheduler"),(0,o.kt)("p",null,"you can modify ",(0,o.kt)("inlineCode",{parentName:"p"},"koord-scheduler-config.yaml")," in helm to adjust ",(0,o.kt)("inlineCode",{parentName:"p"},"Coscheduling")," configuration as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: koord-scheduler-config\n  namespace: {{ .Values.installation.namespace }}\ndata:\n  koord-scheduler-config: |\n    apiVersion: kubescheduler.config.k8s.io/v1beta2\n    kind: KubeSchedulerConfiguration\n    leaderElection:\n      leaderElect: true\n      resourceLock: leases\n      resourceName: koord-scheduler\n      resourceNamespace: {{ .Values.installation.namespace }}\n    profiles:\n      - pluginConfig:\n        - name: Coscheduling\n        args:\n            apiVersion: kubescheduler.config.k8s.io/v1beta2\n            kind: CoschedulingArgs`\n            defaultTimeout: 600s\n            controllerWorkers: 1\n        - name: ElasticQuota\n        ...\n")))}p.isMDXComponent=!0}}]);