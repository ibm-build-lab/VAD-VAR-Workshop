"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[724],{6176:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",img:"img",ul:"ul",li:"li",strong:"strong",ol:"ol",a:"a",blockquote:"blockquote",h2:"h2",em:"em",code:"code"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-using-ibm-mq-and-ibm-event-streams-for-near-realtime-data-replication"},l.createElement(t.h1,{id:"102-using-ibm-mq-and-ibm-event-streams-for-near-realtime-data-replication"},"102: Using IBM MQ and IBM Event Streams for near realtime data replication"),"\n",l.createElement(t.p,null,"In this lab you will use IBM MQ and IBM Event Streams to replicate data from a transactional database to a reporting database. The pattern used allows for seamless horizontal scaling to minimize the latency between the time the transaction is committed to the transactional database and when it is available to be queried in the reporting database."),"\n",l.createElement(t.p,null,"The architecture of the solution you will build is shown below:"),"\n",l.createElement(t.img,{src:"/1686804126701.61871108455/architecture2.png",alt:"Architecture diagram"}),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The ",l.createElement(t.strong,null,"portfolio")," microservice sits at the center of the application. This microservice:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"sends completed transactions to an IBM MQ queue."),"\n",l.createElement(t.li,null,"calls the ",l.createElement(t.strong,null,"trade-history")," service to get aggregated historical trade data."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The ",l.createElement(t.strong,null,"Kafka Connect")," source uses the Kafka Connect framework and an IBM MQ source to consume the transaction data from IBM MQ and sends it to a topic in IBM Event Streams. By scaling this service horizontally you can decrease the latency between the time the transaction is committed to the transactional database and when it is available to be queried in the reporting database,"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The ",l.createElement(t.strong,null,"Kafka Connect")," sink uses the Kafka Connect framework and a Mongodb sink to receive the transaction data from IBM Event Streams and publishes it to the reporting database. By scaling this service horizontally you can decrease the latency between the time the transaction is committed to the transactional database and when it is available to be queried in the reporting database."),"\n"),"\n"),"\n",l.createElement(t.p,null,"This lab is broken up into the following steps:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#step-1-uninstall-the-traderlite-app"},"Uninstall the TraderLite app")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#step-2-create-a-topic-in-the-event-streams-management-console"},"Create a topic in the Event Streams Management Console")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#step-3-add-messaging-components-to-the-trader-lite-app"},"Add messaging components to the Trader Lite app")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#step-4-generate-some-test-data-with-the-traderlite-app"},"Generate some test data with the Trader Lite app")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#step-5-view-messages-in-ibm-mq"},"Verify your trades have been sent as messages to IBM MQ")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#step-6-start-kafka-replication"},"Start Kafka Replication")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#step-7-verify-transaction-data-was-replicated-to-the-trade-history-database"},"Verify transaction data was replicated to the Trade History database")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#step-8-examine-the-messages-sent-to-your-event-streams-topic"},"Examine the messages sent to your Event Streams topic")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"#summary"},"Summary")),"\n"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," You can click on any image in the instructions below to zoom in and see more details. When you do that just click on your browser's back button to return to the previous state."),"\n"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-1-uninstall-the-traderlite-app"},l.createElement(t.h2,{id:"step-1-uninstall-the-traderlite-app"},l.createElement(t.a,{href:"#step-1-uninstall-the-traderlite-app"},"Step 1: Uninstall the TraderLite app")),"\n",l.createElement(t.p,null,"If you've completed the API Connect and/or the Salesforce integration labs then you will have the app running already. For this lab it's easier to install the app from scratch so you can use the OpenShift GUI environment (as opposed to editing the YAML file of an existing instance) to select all the options needed for this app. If the app is ",l.createElement(t.em,null,"NOT")," installed skip to ",l.createElement(t.strong,null,"Step 2"),"."),"\n",l.createElement(t.p,null,"1.1 Go to the OpenShift console of your workshop cluster. Select your ",l.createElement(t.strong,null,l.createElement(t.em,null,"studentnnn"))," project. In the navigation on the left select ",l.createElement(t.strong,null,"Installed Operators")," in the ",l.createElement(t.strong,null,"Operators")," section and select the ",l.createElement(t.strong,null,"TraderLite Operator")),"\n",l.createElement(t.a,{href:"/1686804126805.61991108729/traderlite-operator.png"},l.createElement(t.img,{src:"/1686804126805.61991108729/traderlite-operator.png",alt:""})),"\n",l.createElement(t.p,null,"1.2 Click on the ",l.createElement(t.strong,null,"TraderLite app")," tab"),"\n",l.createElement(t.a,{href:"/1686804126797.61991108723/traderlite-crd.png"},l.createElement(t.img,{src:"/1686804126797.61991108723/traderlite-crd.png",alt:""})),"\n",l.createElement(t.p,null,"1.3 Select current namespace only. Click on the 3 periods to the right of the existing TraderLite CRD and select Delete TraderLite from the context menu."),"\n",l.createElement(t.a,{href:"/1686804126773.61961108708/select-traderlite-crd2.png"},l.createElement(t.img,{src:"/1686804126773.61961108708/select-traderlite-crd2.png",alt:""})),"\n",l.createElement(t.p,null,"1.4 In the navigation area on the left select ",l.createElement(t.strong,null,"Pods")," in the ",l.createElement(t.strong,null,"Workloads")," section. You should see that the ",l.createElement(t.em,null,"traderlite-xxxxx-yyyyy")," pods are terminated."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.em,null,"Note: You can enter ",l.createElement(t.code,null,"traderlite")," in the search by name input field to filter the pods.")),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-2-create-a-topic-in-the-event-streams-management-console"},l.createElement(t.h2,{id:"step-2-create-a-topic-in-the-event-streams-management-console"},l.createElement(t.a,{href:"#step-2-create-a-topic-in-the-event-streams-management-console"},"Step 2: Create a topic in the Event Streams Management Console")),"\n",l.createElement(t.p,null,"2.1 Go to the CP4I Platform Navigator browser tab"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note"),": If you've closed the Platform Navigator tab in your browser follow the instructions in the ",l.createElement(t.a,{href:"https://ibmcp4i.github.io/cloudpakforintegration-multitenant-workshop/faq/"},"FAQ"),"."),"\n"),"\n",l.createElement(t.p,null,"2.2 Click on the link to the Event Streams instance"),"\n",l.createElement(t.a,{href:"/1686804126749.61911108488/nav-to-es.png"},l.createElement(t.img,{src:"/1686804126749.61911108488/nav-to-es.png",alt:""})),"\n",l.createElement(t.p,null,"2.3 If prompted to login select the ",l.createElement(t.strong,null,"Enterprise LDAP")," user registry and log in with your credentials."),"\n",l.createElement(t.p,null,"2.4 Click on the ",l.createElement(t.strong,null,"Create a topic")," tile"),"\n",l.createElement(t.a,{href:"/1686804126713.6191108464/create-topic.png"},l.createElement(t.img,{src:"/1686804126713.6191108464/create-topic.png",alt:""})),"\n",l.createElement(t.p,null,"2.5 Use your username for the name of the topic. For example, if your username is ",l.createElement(t.code,null,"student005")," then name the topic ",l.createElement(t.code,null,"student005"),". Click ",l.createElement(t.strong,null,"Next"),"."),"\n",l.createElement(t.p,null,"2.6 Leave the default for message retention and click ",l.createElement(t.strong,null,"Next"),"."),"\n",l.createElement(t.p,null,"2.7 Leave the default for replicas and click ",l.createElement(t.strong,null,"Create topic"),"."),"\n",l.createElement(t.p,null,"2.8 You should see your new topic listed."),"\n",l.createElement(t.a,{href:"/1686804126757.61941108493/new-topic.png"},l.createElement(t.img,{src:"/1686804126757.61941108493/new-topic.png",alt:""})),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-3-add-messaging-components-to-the-trader-lite-app"},l.createElement(t.h2,{id:"step-3-add-messaging-components-to-the-trader-lite-app"},l.createElement(t.a,{href:"#step-3-add-messaging-components-to-the-trader-lite-app"},"Step 3: Add messaging components to the Trader Lite app")),"\n",l.createElement(t.p,null,"In this section you will install the TraderLite app to start storing transactions as MQ messages, without setting up the KafkaConnect part that will move the transactions out of MQ, into Event Streams and then into MongoDB. This demonstrates how MQ can serve as a reliable store and forward buffer especially during temporary network disruption."),"\n",l.createElement(t.p,null,"3.1 Go to the OpenShift console of your workshop cluster. Select your ",l.createElement(t.strong,null,l.createElement(t.em,null,"studentnnn"))," project."),"\n",l.createElement(t.p,null,"3.2 Click on ",l.createElement(t.strong,null,"Installed Operators")," (in the ",l.createElement(t.strong,null,"Operators")," section) in the left navigation and then click on the ",l.createElement(t.strong,null,"TraderLite Operator")," in the list."),"\n",l.createElement(t.a,{href:"/1686804126777.61961108710/select-traderlite-operator2.png"},l.createElement(t.img,{src:"/1686804126777.61961108710/select-traderlite-operator2.png",alt:""})),"\n",l.createElement(t.p,null,"3.3 Click the ",l.createElement(t.strong,null,"Create Instance")," to start the installation of the TraderLite app."),"\n",l.createElement(t.a,{href:"/1686804126797.61991108725/traderlite-create-instance2.png"},l.createElement(t.img,{src:"/1686804126797.61991108725/traderlite-create-instance2.png",alt:""})),"\n",l.createElement(t.p,null,"3.4 Name the instance ",l.createElement(t.em,null,"traderlite")),"\n",l.createElement(t.p,null,"3.5 Set the following values:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Under ",l.createElement(t.strong,null,"Kafka Access")," select the ",l.createElement(t.strong,null,"studentnnn")," topic"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Enable ",l.createElement(t.strong,null,"KafkaIntegration")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Under ",l.createElement(t.strong,null,"Mqaccess")," select the ",l.createElement(t.strong,null,"STUDENTNNN.QUEUE")," queue that corresponds to your username."),"\n"),"\n"),"\n",l.createElement(t.a,{href:"/1686804126801.61991108728/traderlite-create-values2.png"},l.createElement(t.img,{src:"/1686804126801.61991108728/traderlite-create-values2.png",alt:""})),"\n",l.createElement(t.p,null,"3.6 Scroll down and click ",l.createElement(t.strong,null,"Create")),"\n",l.createElement(t.p,null,"3.7 In the left navigation select ",l.createElement(t.strong,null,"Pods")," (in the ",l.createElement(t.strong,null,"Workloads")," section) and then wait for all the TraderLite pods to have a status of ",l.createElement(t.strong,null,"Running")," and be in the ",l.createElement(t.strong,null,"Ready")," state.\nmkdocs"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.em,null,"Note: You will know the traderlite-xxxxx pods are in a ready state when the ",l.createElement(t.code,null,"Ready")," column shows ",l.createElement(t.code,null,"1/1"),".")),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-4-generate-some-test-data-with-the-traderlite-app"},l.createElement(t.h2,{id:"step-4-generate-some-test-data-with-the-traderlite-app"},l.createElement(t.a,{href:"#step-4-generate-some-test-data-with-the-traderlite-app"},"Step 4: Generate some test data with the TraderLite app")),"\n",l.createElement(t.p,null,"4.1 In your OpenShift console click on ",l.createElement(t.strong,null,"Routes")," in the left navigation under the ",l.createElement(t.strong,null,"Networking")," section and then click on the icon next to the url for the ",l.createElement(t.strong,null,"tradr")," app (the UI for TraderLite)"),"\n",l.createElement(t.a,{href:"/1686804126809.61991108732/traderlite-run-tradr2.png"},l.createElement(t.img,{src:"/1686804126809.61991108732/traderlite-run-tradr2.png",alt:""})),"\n",l.createElement(t.p,null,"4.2 Log in using the username ",l.createElement(t.code,null,"stock")," and the password ",l.createElement(t.code,null,"trader")),"\n",l.createElement(t.a,{href:"/1686804126781.61961108714/stock-trader-login2.png"},l.createElement(t.img,{src:"/1686804126781.61961108714/stock-trader-login2.png",alt:""})),"\n",l.createElement(t.p,null,"4.3 Click ",l.createElement(t.strong,null,"Add Client")," fill in the form. You must use valid email and phone number formats to avoid validation errors."),"\n",l.createElement(t.a,{href:"/1686804126753.61941108491/new-client.png"},l.createElement(t.img,{src:"/1686804126753.61941108491/new-client.png",alt:""})),"\n",l.createElement(t.p,null,"4.4 Click ",l.createElement(t.strong,null,"Save")),"\n",l.createElement(t.p,null,"4.5 Click on the ",l.createElement(t.strong,null,"Portfolio ID")," of the new client to see the details of the portfolio"),"\n",l.createElement(t.a,{href:"/1686804126757.61941108492/new-portfolio.png"},l.createElement(t.img,{src:"/1686804126757.61941108492/new-portfolio.png",alt:""})),"\n",l.createElement(t.p,null,"4.6 Buy some shares of 2 or 3 different companies and then sell a portion of one of the shares you just bought. To buy shares, click the ",l.createElement(t.code,null,"Buy Stock")," button, then select a company and enter a share amount. To sell shares, click the ",l.createElement(t.code,null,"Sell stock")," button, then select the company symbol and enter the number of shares to sell."),"\n",l.createElement(t.a,{href:"/1686804126689.61841108444/a-few-trades.png"},l.createElement(t.img,{src:"/1686804126689.61841108444/a-few-trades.png",alt:""})),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," Your ROI will be wrong because we are not yet replicating the historical trade data that goes in to the calculation of the ROI."),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-5-view-messages-in-ibm-mq"},l.createElement(t.h2,{id:"step-5-view-messages-in-ibm-mq"},l.createElement(t.a,{href:"#step-5-view-messages-in-ibm-mq"},"Step 5: View messages in IBM MQ")),"\n",l.createElement(t.p,null,"5.1 Go to the CP4I Platform Navigator browser tab"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note"),": If you've closed the Platform Navigator tab in your browser follow the instructions in the ",l.createElement(t.a,{href:"https://ibmcp4i.github.io/cloudpakforintegration-multitenant-workshop/faq/"},"FAQ"),"."),"\n"),"\n",l.createElement(t.p,null,"5.2 Click on the link to the MQ instance"),"\n",l.createElement(t.a,{href:"/1686804126753.61941108490/nav-to-mq.png"},l.createElement(t.img,{src:"/1686804126753.61941108490/nav-to-mq.png",alt:""})),"\n",l.createElement(t.p,null,"5.3 If prompted to login select the ",l.createElement(t.strong,null,"Enterprise LDAP")," user registry and log in with your credentials."),"\n",l.createElement(t.p,null,"5.4 Click on the ",l.createElement(t.strong,null,"Manage QMTRADER")," tile"),"\n",l.createElement(t.a,{href:"images/manager-qmtrader-tile.png"},l.createElement(t.img,{src:"/1686804126741.61911108481/manage-qmtrader-tile.png",alt:""})),"\n",l.createElement(t.p,null,"5.5 Click on the ",l.createElement(t.strong,null,"STUDENTNNN.QUEUE")," queue that corresponds to your username."),"\n",l.createElement(t.a,{href:"/1686804126793.61991108722/trader-queue.png"},l.createElement(t.img,{src:"/1686804126793.61991108722/trader-queue.png",alt:""})),"\n",l.createElement(t.p,null,"5.5 You should see messages for the trades you just executed. The number of messages in the queue will vary based on the number of buy/sell transactions you performed in the previous steps."),"\n",l.createElement(t.a,{href:"/1686804126741.61911108484/mq-messages.png"},l.createElement(t.img,{src:"/1686804126741.61911108484/mq-messages.png",alt:""})),"\n",l.createElement(t.p,null,"5.6 Keep the browser tab with the MQ web interface open as you'll need it later in the lab."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-6-start-kafka-replication"},l.createElement(t.h2,{id:"step-6-start-kafka-replication"},l.createElement(t.a,{href:"#step-6-start-kafka-replication"},"Step 6: Start Kafka Replication")),"\n",l.createElement(t.p,null,"In this section you will configure the TraderLite app to start moving the transaction data out of MQ, into Kafka and then into the MongoDB reporting database."),"\n",l.createElement(t.p,null,"6.1 Go to the OpenShift console of your assigned cluster. In the navigation on the left select ",l.createElement(t.strong,null,"Installed Operators")," and select the ",l.createElement(t.strong,null,"TraderLite Operator")),"\n",l.createElement(t.p,null,"6.2 Click on the ",l.createElement(t.strong,null,"TraderLite app")," tab"),"\n",l.createElement(t.a,{href:"/1686804126797.61991108723/traderlite-crd.png"},l.createElement(t.img,{src:"/1686804126797.61991108723/traderlite-crd.png",alt:""})),"\n",l.createElement(t.p,null,"6.3 Click on the 3 periods to the right of the existing TraderLite CRD and select ",l.createElement(t.strong,null,"Edit TraderLite")," from the context menu."),"\n",l.createElement(t.p,null,"6.4 Scroll down to line 432 and set ",l.createElement(t.strong,null,"Kafka Connect enabled")," to ",l.createElement(t.strong,null,"true")," (leave all the other values unchanged)."),"\n",l.createElement(t.a,{href:"/1686804126733.61911108478/kafka-connect-enabled.png"},l.createElement(t.img,{src:"/1686804126733.61911108478/kafka-connect-enabled.png",alt:""})),"\n",l.createElement(t.p,null,"6.5 Click ",l.createElement(t.strong,null,"Save"),"."),"\n",l.createElement(t.p,null,"6.6 In the navigation on the left select ",l.createElement(t.strong,null,"Installed Operators")," and select the ",l.createElement(t.strong,null,"Event Streams")," operator."),"\n",l.createElement(t.a,{href:"/1686804126725.6191108471/es-operator.png"},l.createElement(t.img,{src:"/1686804126725.6191108471/es-operator.png",alt:""})),"\n",l.createElement(t.p,null,"6.7 Click on the ",l.createElement(t.strong,null,"All instances")," tab and wait for the ",l.createElement(t.em,null,"mq-source")," and ",l.createElement(t.em,null,"mongodb-sink")," connectors to be in the ",l.createElement(t.em,null,"Ready")," state before continuing."),"\n",l.createElement(t.a,{href:"/1686804126737.61911108479/kc-status.png"},l.createElement(t.img,{src:"/1686804126737.61911108479/kc-status.png",alt:""})),"\n",l.createElement(t.p,null,"6.8 Go back to the browser tab with the MQ Console and verify that all the messages have been consumed by the ",l.createElement(t.em,null,"mq-source")," connector. ",l.createElement(t.em,null,"(Note: You may need to reload this browser tab to see that the messages have been consumed.)")),"\n",l.createElement(t.a,{href:"/1686804126741.61911108483/mq-empty.png"},l.createElement(t.img,{src:"/1686804126741.61911108483/mq-empty.png",alt:""})),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-7-verify-transaction-data-was-replicated-to-the-trade-history-database"},l.createElement(t.h2,{id:"step-7-verify-transaction-data-was-replicated-to-the-trade-history-database"},l.createElement(t.a,{href:"#step-7-verify-transaction-data-was-replicated-to-the-trade-history-database"},"Step 7: Verify transaction data was replicated to the Trade History database")),"\n",l.createElement(t.p,null,"7.1 Go to the OpenShift console of your workshop cluster. In the navigation on the left select ",l.createElement(t.strong,null,"Routes")," in the ",l.createElement(t.strong,null,"Networking")," section."),"\n",l.createElement(t.p,null,"7.2 Copy the link for the ",l.createElement(t.em,null,"trade-history")," microservice and paste it into a new browser tab."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," You will get a 404 (Not Found) message if you try to access this URL as is. This is because the ",l.createElement(t.em,null,"trade-history")," microservice requires extra path information."),"\n"),"\n",l.createElement(t.a,{href:"/1686804126789.61961108720/trade-history.png"},l.createElement(t.img,{src:"/1686804126789.61961108720/trade-history.png",alt:""})),"\n",l.createElement(t.p,null,"7.3 Append the string ",l.createElement(t.code,null,"/trades/1000")," to the address you pasted - you should get back some JSON with the test transactions that you ran earlier."),"\n",l.createElement(t.a,{href:"/1686804126793.61991108721/trade-history2.png"},l.createElement(t.img,{src:"/1686804126793.61991108721/trade-history2.png",alt:""})),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-8-examine-the-messages-sent-to-your-event-streams-topic"},l.createElement(t.h2,{id:"step-8-examine-the-messages-sent-to-your-event-streams-topic"},l.createElement(t.a,{href:"#step-8-examine-the-messages-sent-to-your-event-streams-topic"},"Step 8: Examine the messages sent to your Event Streams topic")),"\n",l.createElement(t.p,null,"8.1 Go to the CP4I Platform Navigator browser tab"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note"),": If you've closed the Platform Navigator tab in your browser follow the instructions in the ",l.createElement(t.a,{href:"https://ibmcp4i.github.io/cloudpakforintegration-multitenant-workshop/faq/"},"FAQ"),"."),"\n"),"\n",l.createElement(t.p,null,"8.2 Click on the link to the Event Streams instance"),"\n",l.createElement(t.a,{href:"/1686804126749.61911108488/nav-to-es.png"},l.createElement(t.img,{src:"/1686804126749.61911108488/nav-to-es.png",alt:""})),"\n",l.createElement(t.p,null,"8.3 If prompted to login select the ",l.createElement(t.strong,null,"Enterprise LDAP")," user registry and log in with your credentials."),"\n",l.createElement(t.p,null,"8.4 Click on the topics icon"),"\n",l.createElement(t.a,{href:"/1686804126789.61961108719/topics-icon.png"},l.createElement(t.img,{src:"/1686804126789.61961108719/topics-icon.png",alt:""})),"\n",l.createElement(t.p,null,"8.5 Click on th topic that corresponds to your username."),"\n",l.createElement(t.a,{href:"/1686804126789.61961108718/topic-name.png"},l.createElement(t.img,{src:"/1686804126789.61961108718/topic-name.png",alt:""})),"\n",l.createElement(t.p,null,"8.6 Select a message to see it's details"),"\n",l.createElement(t.a,{href:"/1686804126741.61911108482/message-details.png"},l.createElement(t.img,{src:"/1686804126741.61911108482/message-details.png",alt:""})),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"summary"},l.createElement(t.h2,{id:"summary"},l.createElement(t.a,{href:"#summary"},"Summary")),"\n",l.createElement(t.p,null,"Congratulations ! You successfully completed the following key steps in this lab:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Configured the Trader Lite app to use MQ"),"\n",l.createElement(t.li,null,"Deploy Kafka Connect with IBM Event Streams"),"\n",l.createElement(t.li,null,"Generated transactions in the Trader Lite app and verified that the data is being replicated via MQ and Event Streams"),"\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},s=n(4184),c=n.n(s),i=n(4690),m=n(1140),u=n(2565),h=n(8531),p=n(3383),d=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:s}=e,i=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),g=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(h.Z,{className:d.YS},l.createElement("article",{className:c()(d.Y2,!g&&d.ey),ref:i},l.createElement(u.Z,{components:{h1:()=>null}},s)),g&&l.createElement(p.Z,{itemsList:t,maxDepth:2,currSection:E})))},g=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(i.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(E,e,l.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(1151),r=n(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var s=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...o,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(7500),r=n(4184),o=n.n(r),s=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&c(r,t,n+1)})),t};var i=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>c(t[0].items||[])),[t]),r=(0,s.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return s},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:s},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-cp-4-i-102-md-fc89e02b176e0c7ddf5b.js.map