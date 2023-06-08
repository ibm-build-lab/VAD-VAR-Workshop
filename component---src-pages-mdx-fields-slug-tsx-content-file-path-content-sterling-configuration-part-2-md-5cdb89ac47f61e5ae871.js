"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3087],{7948:function(e,n,t){t.r(n),t.d(n,{Head:function(){return d},default:function(){return C}});var l=t(1151),r=t(7294);function a(e){const n=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",ol:"ol",li:"li",strong:"strong",img:"img",pre:"pre",code:"code"},(0,l.ah)(),e.components);return r.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"b2bi-configuration-part-2"},r.createElement(n.h1,{id:"b2bi-configuration-part-2"},"B2Bi Configuration Part 2"),"\n",r.createElement(n.p,null,"In this chapter, learn how to create a B2Bi partner community, add partners to the community, create a group with these users, create a routing template for the group, and create routing channels."),"\n",r.createElement(n.p,null,"To make this workshop interesting, we will implement a collection of trading partner networks, with each sharing files within their network. To do this, each workshop participant will uniquely name resources by using a prefix of their initials on resources. All of the examples that follow are what Bilbo Baggins would use (bb)."),"\n",r.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-a-partner-community"},r.createElement(n.h2,{id:"create-a-partner-community"},r.createElement(n.a,{href:"#create-a-partner-community"},"Create a partner community")),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Return to the OpenShift web console and click on the route link to the IBM Sterling File Gateway user interface (UI): ",r.createElement(n.strong,null,"sterling-fg-b2bi-asi-internal-route-filegateway"),"."),"\n",r.createElement(n.img,{src:"/1686266601901.76071104465/OSRoutesFileGateway.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Enter ",r.createElement(n.strong,null,"fg_sysadmin")," in the User ID field, ",r.createElement(n.strong,null,"password#")," in the Password field, and then click the ",r.createElement(n.strong,null,"Sign In")," button."),"\n",r.createElement(n.img,{src:"/1686266601829.761104395/FG_login.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Participants")," pull-down menu item on top menu bar."),"\n",r.createElement(n.img,{src:"/1686266601821.761104373/FG_Participants.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Communities")," in the ",r.createElement(n.strong,null,"Participants")," menu."),"\n",r.createElement(n.img,{src:"/1686266601817.761104359/FG_CommunitiesMenu.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"In the ",r.createElement(n.strong,null,"Communities")," pop-up window, click the ",r.createElement(n.strong,null,"add")," link."),"\n",r.createElement(n.img,{src:"/1686266601813.761104354/FG_CommunitiesAddLink.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Prepend your initials and an underscore to the community name. For example, Bilbo Baggins would enter ",r.createElement(n.strong,null,"bb_sftp_community")," in the ",r.createElement(n.strong,null,"Community Name")," entry field and click ",r.createElement(n.strong,null,"Next"),"."),"\n",r.createElement(n.img,{src:"/1686266601777.75981104298/BB_FG_CommunitiesName.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Select both the ",r.createElement(n.strong,null,"Partner Initiates Protocol Connections to Mailbox")," and the ",r.createElement(n.strong,null,"Partner Listens for Protocol Connections")," check boxes."),"\n",r.createElement(n.img,{src:"/1686266601821.761104370/FG_CommunitiesProtocol-1.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Select the ",r.createElement(n.strong,null,"SSH/SFTP")," checkbox and click ",r.createElement(n.strong,null,"Next"),"."),"\n",r.createElement(n.img,{src:"/1686266601821.761104371/FG_CommunitiesProtocol-2.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Next")," on the ",r.createElement(n.strong,null,"Add Community: Notifications")," form."),"\n",r.createElement(n.img,{src:"/1686266601817.761104361/FG_CommunitiesNotifications.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Finish")," to confirm the creation of the new community."),"\n",r.createElement(n.img,{src:"/1686266601817.761104358/FG_CommunitiesFinish.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Return")," on the community confirmation screen."),"\n",r.createElement(n.img,{src:"/1686266601817.761104355/FG_CommunitiesComplete.png",alt:"image"}),"\n"),"\n"),"\n"),r.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"add-partners-to-the-partner-community"},r.createElement(n.h2,{id:"add-partners-to-the-partner-community"},r.createElement(n.a,{href:"#add-partners-to-the-partner-community"},"Add partners to the partner community")),"\n",r.createElement(n.p,null,"Next, add 2 partners to the newly created ",r.createElement(n.strong,null,"bb_sftp_community"),"."),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"edit")," link for the community that has your initials as the prefix (following the same example for Bilbo): ",r.createElement(n.strong,null,"bb_sftp_community")," on the ",r.createElement(n.strong,null,"Communities")," pop-up window."),"\n",r.createElement(n.img,{src:"/1686266601773.75951104297/BB_FG_CommunitiesEdit.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Under ",r.createElement(n.strong,null,"Partner"),", click the ",r.createElement(n.strong,null,"Add")," link."),"\n",r.createElement(n.img,{src:"/1686266601773.75951104296/BB_FG_CommunitiesDetails.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Use your initials followed by a ",r.createElement(n.strong,null,"dash")," as a prefix for the first partner identifier. Enter ",r.createElement(n.strong,null,"bb-partner1")," in the ",r.createElement(n.strong,null,"Partner Name")," field, 10 digits in the ",r.createElement(n.strong,null,"Phone")," field, ",r.createElement(n.strong,null,r.createElement(n.a,{href:"mailto:bb-partner1@localhost.com"},"bb-partner1@localhost.com"))," in the ",r.createElement(n.strong,null,"Email Address")," field, and then click ",r.createElement(n.strong,null,"Next"),"."),"\n",r.createElement(n.img,{src:"/1686266601777.75981104299/BB_FG_CommunitiesPartner1.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Enter ",r.createElement(n.strong,null,"bb-partner1")," in the ",r.createElement(n.strong,null,"User Name")," field, ",r.createElement(n.strong,null,"password")," in the ",r.createElement(n.strong,null,"Password")," field, ",r.createElement(n.strong,null,"password")," in the ",r.createElement(n.strong,null,"Confirm Password")," field, ",r.createElement(n.strong,null,"BB Partner")," in the ",r.createElement(n.strong,null,"Given Name")," field, ",r.createElement(n.strong,null,"One")," in ",r.createElement(n.strong,null,"Surname")," field, and then click ",r.createElement(n.strong,null,"Next"),". Technically, you can use any password you prefer, but it will be needed later in client demo lab."),"\n",r.createElement(n.img,{src:"/1686266601781.75981104303/BB_FG_CommunitiesPartner1Password.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"bb-partner1 is a Producer of Data")," and then click ",r.createElement(n.strong,null,"Next"),"."),"\n",r.createElement(n.img,{src:"/1686266601781.75981104304/BB_FG_CommunitiesPartner1Role.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the default settings on the ",r.createElement(n.strong,null,"Initiate Connections Settings")," screen and then click ",r.createElement(n.strong,null,"Next"),"."),"\n",r.createElement(n.img,{src:"/1686266601777.75981104300/BB_FG_CommunitiesPartner1CS.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the default settings on the ",r.createElement(n.strong,null,"PGP Settings")," screen and then click ",r.createElement(n.strong,null,"Next"),"."),"\n",r.createElement(n.img,{src:"/1686266601777.75981104302/BB_FG_CommunitiesPartner1PGP.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the settings for ",r.createElement(n.strong,null,"bb-partner1")," and click ",r.createElement(n.strong,null,"Finish"),"."),"\n",r.createElement(n.img,{src:"/1686266601777.75981104301/BB_FG_CommunitiesPartner1Confirm.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Return")," on the ",r.createElement(n.strong,null,"Added Partner Successful")," screen."),"\n",r.createElement(n.img,{src:"/1686266601821.761104368/FG_CommunitiesPartner1Success.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Repeat the Steps 13 through 20 to create a second partner named ",r.createElement(n.strong,null,"partner2")," using the same settings."),"\n",r.createElement(n.img,{src:"/1686266601781.75981104305/BB_FG_CommunitiesPartner2.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Return")," on the ",r.createElement(n.strong,null,"Edit Community: bb_sftp_community")," screen after creating both partners."),"\n",r.createElement(n.img,{src:"/1686266601781.75981104306/BB_FG_CommunitiesReturn.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Close the ",r.createElement(n.strong,null,"Communities")," pop-up window."),"\n",r.createElement(n.img,{src:"/1686266601773.75951104295/BB_FG_CommunitiesClose.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Partners")," under the ",r.createElement(n.strong,null,"Participants")," menu."),"\n",r.createElement(n.img,{src:"/1686266601821.761104374/FG_ParticipantsPartnersMenu.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Refresh")," button if ",r.createElement(n.strong,null,"partner1")," and ",r.createElement(n.strong,null,"partner2")," do not appear in the ",r.createElement(n.strong,null,"Partners")," table."),"\n",r.createElement(n.img,{src:"/1686266601789.75981104316/BB_FG_PartnersTable.png",alt:"image"}),"\n"),"\n"),"\n"),r.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-a-group"},r.createElement(n.h2,{id:"create-a-group"},r.createElement(n.a,{href:"#create-a-group"},"Create a group")),"\n",r.createElement(n.p,null,"You will now add a group to make mapping selecting users into a routing channel more simple and scalable"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Groups")," under the ",r.createElement(n.strong,null,"Participants")," menu."),"\n",r.createElement(n.img,{src:"/1686266601781.75981104307/BB_FG_Groups.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Create")," to add a new Group."),"\n",r.createElement(n.img,{src:"/1686266601785.75981104311/BB_FG_GroupsCreate.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Enter your capital initials followed by a space and then ",r.createElement(n.strong,null,"Partners"),", continuing with the example, it would be ",r.createElement(n.strong,null,"BB Partners"),". Then click on ",r.createElement(n.strong,null,"Save"),"."),"\n",r.createElement(n.img,{src:"/1686266601785.75981104313/BB_FG_GroupsCreateName.png",alt:"image"}),"\n",r.createElement(n.p,null,"Click on ",r.createElement(n.strong,null,"Ok")," to clear the confirmation."),"\n",r.createElement(n.img,{src:"/1686266601785.75981104312/BB_FG_GroupsCreateConf.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"With the Group you added selected, click on ",r.createElement(n.strong,null,"Add Partners..."),"."),"\n",r.createElement(n.img,{src:"/1686266601785.75981104308/BB_FG_GroupsAddPartners.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Select the identities that you added and the group (use Cmd-Click for multiple selections) and then Click ",r.createElement(n.strong,null,"Execute")),"\n",r.createElement(n.img,{src:"/1686266601785.75981104314/BB_FG_GroupsSelectPartners.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the proposed changes for moving the users to the group and Click ",r.createElement(n.strong,null,"Ok")),"\n",r.createElement(n.img,{src:"/1686266601785.75981104310/BB_FG_GroupsConfirmPartners.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Back")," to return to the previous page."),"\n",r.createElement(n.img,{src:"/1686266601785.75981104309/BB_FG_GroupsClosePartners.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Select the group to confirm that the partners are showing as belonging in the group."),"\n",r.createElement(n.img,{src:"/1686266601789.75981104315/BB_FG_GroupsVerify.png",alt:"image"}),"\n"),"\n"),"\n"),r.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-a-routing-template"},r.createElement(n.h2,{id:"create-a-routing-template"},r.createElement(n.a,{href:"#create-a-routing-template"},"Create a routing template")),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Templates")," under the ",r.createElement(n.strong,null,"Routes")," menu."),"\n",r.createElement(n.img,{src:"/1686266601821.761104377/FG_RoutesMenuTemplates.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Create")," button at the bottom of the ",r.createElement(n.strong,null,"Routing Channel Templates")," page."),"\n",r.createElement(n.img,{src:"/1686266601829.761104394/FG_Templates.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Enter ",r.createElement(n.strong,null,"BB Passthrough")," in the ",r.createElement(n.strong,null,"Template Name")," field and then click ",r.createElement(n.strong,null,"Next>>"),"."),"\n",r.createElement(n.img,{src:"/1686266601793.75981104320/BB_FG_TemplateCreateName.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the ",r.createElement(n.strong,null,"Special Characters")," settings and then click ",r.createElement(n.strong,null,"Next>>"),"."),"\n",r.createElement(n.img,{src:"/1686266601797.75981104321/BB_FG_TemplateCreateSpecialChars.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Add only ",r.createElement(n.strong,null,"BB Partners")," to both the ",r.createElement(n.strong,null,"Producer Groups")," and ",r.createElement(n.strong,null,"Consumer Groups")," tables."),"\n",r.createElement(n.img,{src:"/1686266601793.75981104318/BB_FG_TemplateCreateGroups1.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Next>>")," after adding ",r.createElement(n.strong,null,"BB Partners")," to both groups."),"\n",r.createElement(n.img,{src:"/1686266601793.75981104319/BB_FG_TemplateCreateGroups2.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the ",r.createElement(n.strong,null,"Provisioning Facts")," page and then click ",r.createElement(n.strong,null,"Next>>"),"."),"\n",r.createElement(n.img,{src:"/1686266601829.761104392/FG_TemplateCreateProvisioningFacts.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the ",r.createElement(n.strong,null,"File Operation")," page and then click ",r.createElement(n.strong,null,"Next>>"),"."),"\n",r.createElement(n.img,{src:"/1686266601825.761104384/FG_TemplateCreateFileOperation.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Add")," button on the ",r.createElement(n.strong,null,"Producer")," page."),"\n",r.createElement(n.img,{src:"/1686266601825.761104388/FG_TemplateCreateProducerAdd.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Producer File Type")," pull-down menu and select ",r.createElement(n.strong,null,"Unknown"),"."),"\n",r.createElement(n.img,{src:"/1686266601829.761104390/FG_TemplateCreateProducerUnknownMenuSelect.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Enter .+ in the ",r.createElement(n.strong,null,"File name pattern as regular expression")," field and then click ",r.createElement(n.strong,null,"Save"),"."),"\n",r.createElement(n.img,{src:"/1686266601829.761104391/FG_TemplateCreateProducerUnknownPattern.png",alt:"image"}),"\n",r.createElement(n.p,null,"Setting the file pattern to the regular expression .+ allows for file names of one or more characters."),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Next>>")," on the ",r.createElement(n.strong,null,"Producer")," page."),"\n",r.createElement(n.img,{src:"/1686266601825.761104389/FG_TemplateCreateProducerNext.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Add")," button on the ",r.createElement(n.strong,null,"Consumer")," page."),"\n",r.createElement(n.img,{src:"/1686266601821.761104378/FG_TemplateCreateConsumerAdd.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Add")," button on the ",r.createElement(n.strong,null,"New Delivery Channel")," pop-up window."),"\n",r.createElement(n.img,{src:"/1686266601821.761104379/FG_TemplateCreateConsumerNewDeliveryChannel.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Unknown")," in the ",r.createElement(n.strong,null,"Consumer File Type")," pull-down menu."),"\n",r.createElement(n.img,{src:"/1686266601825.761104381/FG_TemplateCreateConsumerNewDeliveryChannelFileTypeMenu.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Enter ",r.createElement(n.strong,null,"${ProducerFileName}")," in the ",r.createElement(n.strong,null,"File name format")," field."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"hljs language-text"},"${ProducerFileName}\n")),"\n",r.createElement("br"),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the help information regarding file name formats by hovering over the ",r.createElement(n.strong,null,"File name format")," entry field and then click ",r.createElement(n.strong,null,"Save"),"."),"\n",r.createElement(n.img,{src:"/1686266601825.761104380/FG_TemplateCreateConsumerNewDeliveryChannelFileTypeFormat.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Save")," on the ",r.createElement(n.strong,null,"New Delivery Channel")," pop-up window."),"\n",r.createElement(n.img,{src:"/1686266601825.761104382/FG_TemplateCreateConsumerNewDeliveryChannelSave.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Save")," on the ",r.createElement(n.strong,null,"Consumer")," page."),"\n",r.createElement(n.img,{src:"/1686266601825.761104383/FG_TemplateCreateConsumerSave.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"OK")," on the ",r.createElement(n.strong,null,"Routing Channel Template successfully created.")," pop-up message."),"\n",r.createElement(n.img,{src:"/1686266601829.761104397/FS_TemplateCreated.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the settings for the new ",r.createElement(n.strong,null,"BB Passthrough")," routing channel template."),"\n",r.createElement(n.img,{src:"/1686266601797.75981104322/BB_FS_TemplateSummary.png",alt:"image"}),"\n"),"\n"),"\n"),r.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-routing-channels"},r.createElement(n.h2,{id:"create-routing-channels"},r.createElement(n.a,{href:"#create-routing-channels"},"Create routing channels")),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Channels")," option under the ",r.createElement(n.strong,null,"Routes")," menu."),"\n",r.createElement(n.img,{src:"/1686266601821.761104376/FG_RoutesChannelsMenu.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Create")," button at bottom right to create a new ",r.createElement(n.strong,null,"Channel"),"."),"\n",r.createElement(n.img,{src:"/1686266601813.761104352/FG_ChannelCreate.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Select ",r.createElement(n.strong,null,"BB Passthrough")," for the ",r.createElement(n.strong,null,"Routing Channel Template"),", ",r.createElement(n.strong,null,"bb-partner1")," for the ",r.createElement(n.strong,null,"Producer"),", and ",r.createElement(n.strong,null,"bb-partner2")," for the ",r.createElement(n.strong,null,"Consumer"),", and then click ",r.createElement(n.strong,null,"Save")," to create the new channel."),"\n",r.createElement(n.img,{src:"/1686266601773.75951104292/BB_FG_ChannelCreateP1toP2.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"OK")," on the ",r.createElement(n.strong,null,"Success")," pop-up window."),"\n",r.createElement(n.img,{src:"/1686266601773.75951104293/BB_FG_ChannelCreateP1toP2Success.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Repeat the prior steps to create a channel from bb-partner2 to bb-partner1."),"\n",r.createElement(n.img,{src:"/1686266601773.75951104294/BB_FG_ChannelCreateP2toP1.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Sign Out"),"."),"\n",r.createElement(n.img,{src:"/1686266601789.75981104317/BB_FG_SignOut.png",alt:"image"}),"\n"),"\n"),"\n",r.createElement(n.p,null,"In the next chapter, the fun begins as the partners start to securely exchange files.")))}var m=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)},c=t(4184),i=t.n(c),o=t(4690),u=t(1140),s=t(2565),g=t(8531),E=t(3383),p=t(7315);const h=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:t=!0,title:l,timeToComplete:a,updated:m}}},children:c}=e,o=(0,r.useRef)(null),{0:h}=(0,r.useState)(""),d=(null===t||t)&&n;return r.createElement(r.Fragment,null,r.createElement(u.Z,{timeToComplete:a,updated:m},n[0].title||l||""),r.createElement(g.Z,{className:p.YS},r.createElement("article",{className:i()(p.Y2,!d&&p.ey),ref:o},r.createElement(s.Z,{components:{h1:()=>null}},c)),d&&r.createElement(E.Z,{itemsList:n,maxDepth:2,currSection:h})))},d=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:t},tableOfContents:{items:l}}}}=e;return r.createElement(o.Z,{pathname:n,title:t||l[0].title||void 0})};function C(e){return r.createElement(h,e,r.createElement(m,e))}},2565:function(e,n,t){t.d(n,{Z:function(){return c}});var l=t(7294),r=t(1151),a=t(7563);const m={table:a.y6,a:a.IW,blockquote:a.R4,SubHeader:a.bU,img:a.fb,code:a.dn,QuizAlert:a.SA,Danger:a.b0,Warning:a.v3,CopyText:a.O5};var c=(0,l.memo)((function(e){let{children:n,components:t={}}=e;return l.createElement(r.Zo,{components:{...m,...t}},n)}))},3383:function(e,n,t){t.d(n,{Z:function(){return o}});var l=t(7294),r=t(7500),a=t(4184),m=t.n(a),c=t(6488);const i=function(e,n,t){return void 0===n&&(n=[]),void 0===t&&(t=0),e.forEach((e=>{const{title:l,url:r,items:a}=e;n.splice(n.length,0,{depth:t,title:l,url:r}),a&&a.length>0&&i(a,n,t+1)})),n};var o=e=>{const{itemsList:n}=e,t=(0,l.useMemo)((()=>i(n[0].items||[])),[n]),a=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return t.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(r.rU,{to:"#",replace:!0},"On this page")),t.map(((e,n)=>{let{title:t,url:r}=e;return l.createElement("a",{className:m()("TableOfContents-module--link--b292b",a===r.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:n,href:r},t)}))))}},7315:function(e,n,t){t.d(n,{Y2:function(){return l},YS:function(){return a},ey:function(){return r}});var l="{mdx-fields__slug}-module--article--e3d5a",r="{mdx-fields__slug}-module--noToc--82387",a="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,n,t){t.d(n,{Zo:function(){return c},ah:function(){return a}});var l=t(7294);const r=l.createContext({});function a(e){const n=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const m={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||m:a(e),l.createElement(r.Provider,{value:c},n)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-sterling-configuration-part-2-md-5cdb89ac47f61e5ae871.js.map