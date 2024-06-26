"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9832],{96226:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return f}});var a=n(11151),l=n(67294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",img:"img"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"104-low-code-integration-using-ai"},l.createElement(t.h1,{id:"104-low-code-integration-using-ai"},"104: Low-code integration using AI"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introduction"},l.createElement(t.h2,{id:"introduction"},l.createElement(t.a,{href:"#introduction"},"Introduction")),"\n",l.createElement(t.p,null,"Data mapping is among the most important design steps in building an integration flow. This design-time task is usually the most tedious, time-consuming, complex, and error-prone because it requires deep understanding of all the data fields on the source and target systems. Building a successful data mapping also requires business analysis, domain expertise, and technical knowledge on both source and target systems."),"\n",l.createElement(t.p,null,"Our goal in creating Mapping Assist was to simplify and automate data mapping. And when coupled with the extensive list of pre-built, security rich connectors, it can accelerate the delivery of value to the business through integration."),"\n",l.createElement(t.p,null,"ACME Retail has acquired another business and needs to synchronize the contacts between two CRM applications. In this demo, we assist ACME using AI and low-code integration, synchronizing contact information between the Salesforce and Insightly CRM systems. We will recognize and automatically match fields with high confidence levels. We will also recommend and assist with other fields where there is lower confidence. And we will generate a transformation across the fields when the field formats are not the same. As you continue to use the Mapping Assist capability it learns from previously accepted matches to raise confidence levels in future mapping efforts."),"\n",l.createElement(t.p,null,"Using AI-powered mapping, we can reduce errors and speed integration development.\nIn the demo, we will execute the following steps:\n• Access the Cloud Pak for Integration environment\n• Create and implement an API-enabled flow to map the fields for ‘contact’ between Salesforce and Insightly CRM\n• Auto-map fields wherever the matching confidence is above 80%\n• Generate a data transformation when the field formats do not match\n• Execute the flow to see the results"),"\n",l.createElement(t.p,null,"Let’s get started!"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"1---accessing-the-environment"},l.createElement(t.h2,{id:"1---accessing-the-environment"},l.createElement(t.a,{href:"#1---accessing-the-environment"},"1 - Accessing the environment")),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"1.1")," ",l.createElement(t.strong,null,"Log in to Cloud Pak for Integration")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," IBM Cloud Pak for Integration is a hybrid integration solution that provides an automated lifecycle across multiple styles of enterprise integration. With IBM Cloud Pak for Integration, companies can speed integration development, reduce costs, and maintain enhanced security, governance, and availability. Let’s see IBM Cloud Pak for Integration in action. For today’s demo, we are using IBM Cloud Pak for Integration installed on the IBM cloud. Let me log in.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 1.1.1 Log in with ",l.createElement(t.strong,null,"Username ‘integration-admin’")," (1), the ",l.createElement(t.strong,null,"Password")," (2) created in Demo preparation, and click ",l.createElement(t.strong,null,"Sign In")," . ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/prep-image210.png",alt:""}))))),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"1.2")," ",l.createElement(t.strong,null,"View the Cloud Pak for Integration home screen")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," Welcome to IBM Cloud Pak for Integration! We’re now at the home screen showing all the capabilities of the Cloud Pak brought together in one place. Specialized integration capabilities — for API management, application integration, messaging, and more — are built on top of powerful automation services. ",l.createElement("br"),l.createElement("br")," In this demo, we’ll use the App Connect Designer’s Mapping Assist capability to speed the transformation of complex data formats used by cloud applications, such as Salesforce and Insightly. Let’s open our App Connect Designer.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 1.2.1 Show the home page and click ",l.createElement(t.strong,null,"ace-designer-demo")," . ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-1-2-1.png",alt:""}))))),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"2---creating-the-flow"},l.createElement(t.h2,{id:"2---creating-the-flow"},l.createElement(t.a,{href:"#2---creating-the-flow"},"2 - Creating the flow")),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"2.1")," ",l.createElement(t.strong,null,"Create flows for an API")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," Here we are in the designer tooling. This is where we can create all our API integration flows and manage our connectivity to our services and endpoints. As we begin, there is nothing here yet, so let’s build some integration logic. Let’s see how simple it is to create our flow for an API. First, we need to create a model for our contact.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 2.1.1 Click ",l.createElement(t.strong,null,"Create flows for an API")," . ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-2-1-1.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 2.1.2 Rename the API ",l.createElement(t.strong,null,"Contact API")," (1), name the model ",l.createElement(t.strong,null,"Contact")," (2), and click ",l.createElement(t.strong,null,"Create model")," (3). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/Script2.1.2.png",alt:""}))))),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"2.2")," ",l.createElement(t.strong,null,"Create properties")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," Let’s start by defining our properties. There will be an ID, FirstName, LastName, Email, Address, Phone, and Mobile. As you can see, we are developing our API based on a model. It’s completely model-driven, and we’ve just modeled our ‘Contact’ object. Next, we’ll design and implement the operation that is related to this ‘Contact’ model.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 2.2.1 In the property name, enter ",l.createElement(t.strong,null,"ID")," and click ",l.createElement(t.strong,null,"Add property")," . Repeat the same steps to include ",l.createElement(t.strong,null,"FirstName")," , ",l.createElement(t.strong,null,"LastName")," , ",l.createElement(t.strong,null,"Email")," , ",l.createElement(t.strong,null,"Address")," , ",l.createElement(t.strong,null,"Phone")," , and ",l.createElement(t.strong,null,"Mobile")," (1). Click ",l.createElement(t.strong,null,"Operations")," (2). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-2-2-1.png",alt:""}))))),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"2.3")," ",l.createElement(t.strong,null,"Create operation")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," First, let’s select the “Create Contact” operation. This operation syncs the data from Salesforce to Insightly CRM. Let’s implement our API flow.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 2.3.1 Click the ",l.createElement(t.strong,null,"Select an operation to add")," dropdown. select ",l.createElement(t.strong,null,"Create Contact")," (2). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/Script2.3.1.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 2.3.2 Click ",l.createElement(t.strong,null,"Implement flow")," . ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/Script2.3.2.png",alt:""}))))),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"3---implementing-the-flow"},l.createElement(t.h2,{id:"3---implementing-the-flow"},l.createElement(t.a,{href:"#3---implementing-the-flow"},"3 - Implementing the flow")),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"3.1")," ",l.createElement(t.strong,null,"Adjust flow response")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," Here we see our initial demo flow, which initially has just a ‘Request’ node and a ‘Response’ node. We will use the designer flow editor to edit and change our flow to add the necessary additional steps. ",l.createElement("br"),l.createElement("br")," Before we add to our flow, let’s adjust the response that is returned when the flow is called. This response serves to close the API flow and is a required construct. Because there is no data needed by the caller of the API flow (but a response is required), we can have a very simple response. We will add the ID to the response.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 3.1.1 Click the ",l.createElement(t.strong,null,"Response")," node. ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-3-0-1.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 3.1.2 Enter ",l.createElement(t.strong,null,"ID")," in the ",l.createElement(t.strong,null,"ID")," field (1), and select the ",l.createElement(t.strong,null,"ID")," object (2). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-3-0-2.png",alt:""}))))),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"3.2")," ",l.createElement(t.strong,null,"Retrieve contacts")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," Our API will be easy to create. The API will retrieve the contacts from Salesforce. For each contact that is retrieved, we will sync the data to Insightly CRM. Let’s include our pre-configured Salesforce connector and select the “Retrieve contacts” operation.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 3.2.1 Click the ",l.createElement(t.strong,null,"Plus")," icon (1). Search for the ",l.createElement(t.strong,null,"Salesforce")," connector (2). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-3-1-1.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 3.2.2 From your pre-configured Salesforce connector, select ",l.createElement(t.strong,null,"Retrieve contacts")," . ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-3-1-2.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 3.2.3 Select ",l.createElement(t.strong,null,"Process 10 items from the collection")," . ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-3-1-3.png",alt:""}))))),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"3.3")," ",l.createElement(t.strong,null,"‘For each’ statement")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," Now, we need to add a ‘for each’ statement because we need to retrieve all of the contacts from Salesforce. For each contact, we need to create a contact in the Insightly CRM. We’ll select the “Salesforce Contacts” object as the object to be processed.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 3.3.1 Click the ",l.createElement(t.strong,null,"Plus")," icon. ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-3-2-1.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 3.3.2 Then, open the ",l.createElement(t.strong,null,"Toolbox")," tab (1) and select the ",l.createElement(t.strong,null,"For each")," statement (2). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-3-2-2.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 3.3.3 Enter ",l.createElement(t.strong,null,"Contacts")," in the ",l.createElement(t.strong,null,"Select the collection of items to process")," field (1), and select the Salesforce ",l.createElement(t.strong,null,"Contacts")," object (2). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-3-2-3.png",alt:""}))))),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"3.4")," ",l.createElement(t.strong,null,"Create contacts")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," Now we are configuring our flow to connect to the Insightly CRM. Our Insightly account is pre-configured, so we select the ‘Create Contact’ operation. The Mapping Assist feature starts to work in the background, generating suggestions for us to populate the target fields in Insightly.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 3.4.1 In the ",l.createElement(t.strong,null,"For each")," loop, click the ",l.createElement(t.strong,null,"Plus")," icon. ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-3-3-1.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 3.4.2 In the ",l.createElement(t.strong,null,"Applications")," tab, search for the ",l.createElement(t.strong,null,"Insightly")," connector. ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-3-3-2.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 3.4.3 Select the ",l.createElement(t.strong,null,"Create contact")," operation. ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-3-3-3.png",alt:""}))))),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"4---using-the-mapping-assist-feature"},l.createElement(t.h2,{id:"4---using-the-mapping-assist-feature"},l.createElement(t.a,{href:"#4---using-the-mapping-assist-feature"},"4 - Using the Mapping Assist feature")),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"4.1")," ",l.createElement(t.strong,null,"View suggestions")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," In the node, you can manually define the map between the Salesforce and Insightly fields. However, this is difficult because there are lots of fields, and the products will probably have different field names for the same objects. ",l.createElement("br"),l.createElement("br"),"With Mapping Assist, you don’t need to type all of these mappings. We’ll use AI to simplify our work! Once Insightly’s ‘Create Contact’ node is added, mapping suggestions are automatically generated. The best possible matches (top suggestions) are presented, which can be automatically inserted into fields with a single click. These top suggestions have an 80% (or higher) confidence score, and the count (20+ suggestions) identifies the total number of fields that will be populated with mappings.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 4.1.1 Point out Mapping Assist’s ",l.createElement(t.strong,null,"Preview [20+] mapping suggestions")," and click on the button. ",l.createElement("br"),l.createElement("br"),l.createElement("svg",{class:"inline-notification__icon",width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm1-3V7H7v6h2zM8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"})),l.createElement("br"),"The exact number of suggestions may vary.",l.createElement("br"),l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-4-1-1.png",alt:""}))))),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"4.2")," ",l.createElement(t.strong,null,"Apply suggestions")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," By clicking “Preview mapping suggestions”, all suggestions with a confidence score of at least 80% are automatically displayed into Insightly’s ‘Create Contact’ node. Note that there are suggestions for simple fields as well as for more complex, nested fields. Mapping Assist uses a pre-trained AI algorithm to provide intelligent, customized data map suggestions. From this interface, we can clear the suggestions, or we can accept and apply the suggestions.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 4.2.1 Show the list of suggestions (1) and click ",l.createElement(t.strong,null,"Apply suggestions")," (2). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-4-2-1.png",alt:""}))))),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"4.3")," ",l.createElement(t.strong,null,"Resolve warnings")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," Mapping Assist’s AI algorithm sometimes finds multiple high-confidence mapping possibilities. When this occurs, we need to decide which mapping we want to accept.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 4.3.1 You may or may not see this situation. When this happens, a ",l.createElement(t.strong,null,"warning")," message is shown. You need to resolve any/all fields where this occurs. Delete the field name that is currently mapped to the field with the warning. ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/Error_screen.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 4.3.2 Click the selection list icon next to the field (1), and select the mapping option listed with the “For Each” option from the displayed list (2). Repeat these steps for each field that has a warning. ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/Selection_list.png",alt:""}))))),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"4.4")," ",l.createElement(t.strong,null,"Generate a transformation")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," In some situations, a direct mapping may not be adequate, for instance the data format of the “source” does not match the data format of the “target” field. In this situation you can generate a JSONata expression to define how the source data should be presented in the target application. JSONata is a declarative open-source query and transformation language for JSON data. ",l.createElement("br"),l.createElement("br")," Let’s explore it with the ‘Assistant’s Name’ field. Let’s select “Generate transformation”. The ‘Generate transformation’ panel opens with five blank sources and corresponding target fields that you can use for mapping data formats. We’ll need to provide at least five examples of source and target formats for Cloud Pak for Integration to generate the transformation formula. ",l.createElement("br"),l.createElement("br")," Using Cloud Pak for Integration and the Mapping Assist capability, we were able to easily create a data sync between two CRM solutions without needing to write any code.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 4.4.1 On the ",l.createElement(t.strong,null,"Assistant name")," field, click the ",l.createElement(t.strong,null,"Assistant’s Name")," mapping (1) and select ",l.createElement(t.strong,null,"Transform data format")," (2). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-4_4_1.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 4.4.2 On the ",l.createElement(t.strong,null,"Generate transformation")," dialog, enter ",l.createElement(t.strong,null,"John Lennon")," as the first source name, and enter ",l.createElement(t.strong,null,"J. Lennon")," under ",l.createElement(t.strong,null,"‘Assistant name’ examples (target)")," . Repeat the same steps to include four more assistants’ names using the same transformation format (e.g., Paul McCartney, P. McCartney; George Harrison, G. Harrison; Ringo Starr, R. Starr; Pete Best, P. Best) (1). Click ",l.createElement(t.strong,null,"Generate transformation")," (2), and click ",l.createElement(t.strong,null,"Insert transformation")," (3). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-4_4_2.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 4.4.3 Click ",l.createElement(t.strong,null,"Done")," . ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-4_4_3.png",alt:""}))))),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"5---testing-your-data-sync"},l.createElement(t.h2,{id:"5---testing-your-data-sync"},l.createElement(t.a,{href:"#5---testing-your-data-sync"},"5 - Testing your data sync")),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"5.1")," ",l.createElement(t.strong,null,"Check the target contacts")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," Before we test our data sync flow, let’s check the contacts that we have available. Let’s open our pre-created Insightly CRM account and see the available contacts before we execute the flow. As you can see, we have approximately 20 pre-created contacts, each with pictures. After the test of our flow, we should have two or three new contacts without pictures.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 5.1.1 Open your ",l.createElement(t.strong,null,"Insightly")," home page (1). ",l.createElement("br"),l.createElement("br")," Open the ",l.createElement(t.strong,null,"Contacts")," view (2). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-5_1_1.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 5.1.2 Notice that there are approximately 20 pre-created contacts, each with pictures. ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/Script5.1.2.png",alt:""}))))),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"5.2")," ",l.createElement(t.strong,null,"Test the API")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," It is time to test our data sync. First, we need to start our flow. Once the flow has started, let’s test it. ",l.createElement("br"),l.createElement("br")," Great, our data sync is running.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 5.2.1 Go back to Cloud Pak for Integration’s ",l.createElement(t.strong,null,"App Connect Designer")," page. Start your flow. ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-5_2_1.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 5.2.2 Open the ",l.createElement(t.strong,null,"Test")," tab (1). Click ",l.createElement(t.strong,null,"POST /Contact")," (2) and open the ",l.createElement(t.strong,null,"Try it")," tab (3). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-5_2_2.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 5.2.3 Scroll down to see the body field, and click ",l.createElement(t.strong,null,"Generate")," (1) to create some dummy body content. Click ",l.createElement(t.strong,null,"Send")," (2), and you should see a ",l.createElement(t.strong,null,"201 Created")," response (3). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-5_2_3.png",alt:""}))))),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,{align:"left"},l.createElement(t.strong,null,"5.3")," ",l.createElement(t.strong,null,"Check the data sync")))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Narration")," Now let’s check our new contacts. We should have at least two new contacts. Let’s refresh the ‘Contacts’ page, and here are our new contacts. Let’s check the contact to see the new ‘Assistant Name’ format. ",l.createElement("br"),l.createElement("br")," Great! Everything works as expected.")),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 5.3.1 Go back to Insightly’s ",l.createElement(t.strong,null,"Contacts")," page and refresh the page. ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-5_3_1.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 5.3.2 Explore the new contacts (without the sample_data tags).",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-5_3_2.png",alt:""}))),l.createElement(t.tr,null,l.createElement(t.td,{align:"left"},l.createElement(t.strong,null,"Action")," 5.3.3 Click one of the contacts without a picture (1), and show the new format of ",l.createElement(t.strong,null,"Assistant Name")," based on the function we defined in the flow (2). ",l.createElement("br")," ",l.createElement(t.img,{src:"https://ibm.github.io/platinum-demos-integration/300-integration-low-code-integration-using-ai/images/mapping-assist-5_3_3.png",alt:""}))))),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"summary"},l.createElement(t.h2,{id:"summary"},l.createElement(t.a,{href:"#summary"},"Summary")),"\n",l.createElement(t.p,null,"As we mentioned in the beginning, data mapping is difficult, time-consuming, and error-prone. In this demo, we showed how AI-powered Mapping Assist can alleviate these issues."),"\n",l.createElement(t.p,null,"We auto-mapped all the fields where the matching confidence was at least 80%. Mapping Assist learns from your decisions about selected mappings, and shows these as top suggestions when a similar source and target mapping is attempted in the future – further reducing your mapping efforts."),"\n",l.createElement(t.p,null,"We also generated a data transformation by providing examples of source and target data when fields do not have the same format. AI was used to determine the pattern and generate the transformation."),"\n",l.createElement(t.p,null,"Using AI-powered Mapping Assist reduced the development time and eliminated errors as ACME Retail successfully integrated the new customer contacts from their business acquisition."),"\n",l.createElement(t.p,null,"Thank you for attending this presentation.")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},o=n(94184),s=n.n(o),c=n(24690),m=n(81140),g=n(48623),u=n(88531),d=n(13383),h=n(27315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:i}}},children:o}=e,c=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),p=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:i},t[0].title||a||""),l.createElement(u.Z,{className:h.YS},l.createElement("article",{className:s()(h.Y2,!p&&h.ey),ref:c},l.createElement(g.Z,{components:{h1:()=>null}},o)),p&&l.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:E})))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(E,e,l.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-cp-4-i-104-md-40792ac12cafaf8fedd0.js.map