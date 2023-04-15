"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[455],{4884:function(e,n,t){t.r(n),t.d(n,{Head:function(){return d},default:function(){return C}});var l=t(1151),r=t(7294);function a(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",ol:"ol",li:"li",strong:"strong",img:"img",div:"div",pre:"pre",code:"code",span:"span"},(0,l.ah)(),e.components),{SubHeader:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SubHeader",!0),r.createElement(r.Fragment,null,r.createElement(n.h1,{id:"b2bi-configuration-part-2"},"B2Bi Configuration Part 2"),"\n",r.createElement(t,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",r.createElement(n.p,null,"In this chapter, learn how to create a B2Bi partner community, add partners to the community, create a group with these users, create a routing template for the group, and create routing channels."),"\n",r.createElement(n.p,null,"To make this workshop interesting, we will implement a collection of trading partner networks, with each sharing files within their network. To do this, each workshop participant will uniquely name resources by using a prefix of their initials on resources. All of the examples that follow are what Bilbo Baggins would use (bb)."),"\n",r.createElement(n.h2,{id:"create-a-partner-community"},r.createElement(n.a,{href:"#create-a-partner-community"},"Create a partner community")),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Return to the OpenShift web console and click on the route link to the IBM Sterling File Gateway user interface (UI): ",r.createElement(n.strong,null,"sterling-fg-b2bi-asi-internal-route-filegateway"),"."),"\n",r.createElement(n.img,{src:"/1681564958746.18821366560/OSRoutesFileGateway.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Enter ",r.createElement(n.strong,null,"fg_sysadmin")," in the User ID field, ",r.createElement(n.strong,null,"password#")," in the Password field, and then click the ",r.createElement(n.strong,null,"Sign In")," button."),"\n",r.createElement(n.img,{src:"/1681564958678.18581366490/FG_login.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Participants")," pull-down menu item on top menu bar."),"\n",r.createElement(n.img,{src:"/1681564958670.18551366468/FG_Participants.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Communities")," in the ",r.createElement(n.strong,null,"Participants")," menu."),"\n",r.createElement(n.img,{src:"/1681564958666.18531366454/FG_CommunitiesMenu.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"In the ",r.createElement(n.strong,null,"Communities")," pop-up window, click the ",r.createElement(n.strong,null,"add")," link."),"\n",r.createElement(n.img,{src:"/1681564958666.18531366449/FG_CommunitiesAddLink.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Prepend your initials and an underscore to the community name. For example, Bilbo Baggins would enter ",r.createElement(n.strong,null,"bb_sftp_community")," in the ",r.createElement(n.strong,null,"Community Name")," entry field and click ",r.createElement(n.strong,null,"Next"),"."),"\n",r.createElement(n.img,{src:"/1681564958630.1841366393/BB_FG_CommunitiesName.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Select both the ",r.createElement(n.strong,null,"Partner Initiates Protocol Connections to Mailbox")," and the ",r.createElement(n.strong,null,"Partner Listens for Protocol Connections")," check boxes."),"\n",r.createElement(n.img,{src:"/1681564958670.18551366465/FG_CommunitiesProtocol-1.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Select the ",r.createElement(n.strong,null,"SSH/SFTP")," checkbox and click ",r.createElement(n.strong,null,"Next"),"."),"\n",r.createElement(n.img,{src:"/1681564958670.18551366466/FG_CommunitiesProtocol-2.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Next")," on the ",r.createElement(n.strong,null,"Add Community: Notifications")," form."),"\n",r.createElement(n.img,{src:"/1681564958666.18531366456/FG_CommunitiesNotifications.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Finish")," to confirm the creation of the new community."),"\n",r.createElement(n.img,{src:"/1681564958666.18531366453/FG_CommunitiesFinish.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Return")," on the community confirmation screen."),"\n",r.createElement(n.img,{src:"/1681564958666.18531366450/FG_CommunitiesComplete.png",alt:"image"}),"\n"),"\n"),"\n",r.createElement(n.h2,{id:"add-partners-to-the-partner-community"},r.createElement(n.a,{href:"#add-partners-to-the-partner-community"},"Add partners to the partner community")),"\n",r.createElement(n.p,null,"Next, add 2 partners to the newly created ",r.createElement(n.strong,null,"bb_sftp_community"),"."),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"edit")," link for the community that has your initials as the prefix (following the same example for Bilbo): ",r.createElement(n.strong,null,"bb_sftp_community")," on the ",r.createElement(n.strong,null,"Communities")," pop-up window."),"\n",r.createElement(n.img,{src:"/1681564958630.1841366392/BB_FG_CommunitiesEdit.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Under ",r.createElement(n.strong,null,"Partner"),", click the ",r.createElement(n.strong,null,"Add")," link."),"\n",r.createElement(n.img,{src:"/1681564958630.1841366391/BB_FG_CommunitiesDetails.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Use your initials followed by a ",r.createElement(n.strong,null,"dash")," as a prefix for the first partner identifier. Enter ",r.createElement(n.strong,null,"bb-partner1")," in the ",r.createElement(n.strong,null,"Partner Name")," field, 10 digits in the ",r.createElement(n.strong,null,"Phone")," field, ",r.createElement(n.strong,null,r.createElement(n.a,{href:"mailto:bb-partner1@localhost.com"},"bb-partner1@localhost.com"))," in the ",r.createElement(n.strong,null,"Email Address")," field, and then click ",r.createElement(n.strong,null,"Next"),"."),"\n",r.createElement(n.img,{src:"/1681564958630.1841366394/BB_FG_CommunitiesPartner1.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Enter ",r.createElement(n.strong,null,"bb-partner1")," in the ",r.createElement(n.strong,null,"User Name")," field, ",r.createElement(n.strong,null,"password")," in the ",r.createElement(n.strong,null,"Password")," field, ",r.createElement(n.strong,null,"password")," in the ",r.createElement(n.strong,null,"Confirm Password")," field, ",r.createElement(n.strong,null,"BB Partner")," in the ",r.createElement(n.strong,null,"Given Name")," field, ",r.createElement(n.strong,null,"One")," in ",r.createElement(n.strong,null,"Surname")," field, and then click ",r.createElement(n.strong,null,"Next"),". Technically, you can use any password you prefer, but it will be needed later in client demo lab."),"\n",r.createElement(n.img,{src:"/1681564958634.18431366398/BB_FG_CommunitiesPartner1Password.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"bb-partner1 is a Producer of Data")," and then click ",r.createElement(n.strong,null,"Next"),"."),"\n",r.createElement(n.img,{src:"/1681564958634.18431366399/BB_FG_CommunitiesPartner1Role.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the default settings on the ",r.createElement(n.strong,null,"Initiate Connections Settings")," screen and then click ",r.createElement(n.strong,null,"Next"),"."),"\n",r.createElement(n.img,{src:"/1681564958630.1841366395/BB_FG_CommunitiesPartner1CS.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the default settings on the ",r.createElement(n.strong,null,"PGP Settings")," screen and then click ",r.createElement(n.strong,null,"Next"),"."),"\n",r.createElement(n.img,{src:"/1681564958634.18431366397/BB_FG_CommunitiesPartner1PGP.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the settings for ",r.createElement(n.strong,null,"bb-partner1")," and click ",r.createElement(n.strong,null,"Finish"),"."),"\n",r.createElement(n.img,{src:"/1681564958630.1841366396/BB_FG_CommunitiesPartner1Confirm.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Return")," on the ",r.createElement(n.strong,null,"Added Partner Successful")," screen."),"\n",r.createElement(n.img,{src:"/1681564958670.18551366463/FG_CommunitiesPartner1Success.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Repeat the Steps 13 through 20 to create a second partner named ",r.createElement(n.strong,null,"partner2")," using the same settings."),"\n",r.createElement(n.img,{src:"/1681564958634.18431366400/BB_FG_CommunitiesPartner2.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Return")," on the ",r.createElement(n.strong,null,"Edit Community: bb_sftp_community")," screen after creating both partners."),"\n",r.createElement(n.img,{src:"/1681564958634.18431366401/BB_FG_CommunitiesReturn.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Close the ",r.createElement(n.strong,null,"Communities")," pop-up window."),"\n",r.createElement(n.img,{src:"/1681564958630.1841366390/BB_FG_CommunitiesClose.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Partners")," under the ",r.createElement(n.strong,null,"Participants")," menu."),"\n",r.createElement(n.img,{src:"/1681564958670.18551366469/FG_ParticipantsPartnersMenu.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Refresh")," button if ",r.createElement(n.strong,null,"partner1")," and ",r.createElement(n.strong,null,"partner2")," do not appear in the ",r.createElement(n.strong,null,"Partners")," table."),"\n",r.createElement(n.img,{src:"/1681564958642.18461366411/BB_FG_PartnersTable.png",alt:"image"}),"\n"),"\n"),"\n",r.createElement(n.h2,{id:"create-a-group"},r.createElement(n.a,{href:"#create-a-group"},"Create a group")),"\n",r.createElement(n.p,null,"You will now add a group to make mapping selecting users into a routing channel more simple and scalable"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Groups")," under the ",r.createElement(n.strong,null,"Participants")," menu."),"\n",r.createElement(n.img,{src:"/1681564958638.18431366402/BB_FG_Groups.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Create")," to add a new Group."),"\n",r.createElement(n.img,{src:"/1681564958638.18431366406/BB_FG_GroupsCreate.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Enter your capital initials followed by a space and then ",r.createElement(n.strong,null,"Partners"),", continuing with the example, it would be ",r.createElement(n.strong,null,"BB Partners"),". Then click on ",r.createElement(n.strong,null,"Save"),"."),"\n",r.createElement(n.img,{src:"/1681564958642.18461366408/BB_FG_GroupsCreateName.png",alt:"image"}),"\n",r.createElement(n.p,null,"Click on ",r.createElement(n.strong,null,"Ok")," to clear the confirmation."),"\n",r.createElement(n.img,{src:"/1681564958638.18431366407/BB_FG_GroupsCreateConf.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"With the Group you added selected, click on ",r.createElement(n.strong,null,"Add Partners..."),"."),"\n",r.createElement(n.img,{src:"/1681564958638.18431366403/BB_FG_GroupsAddPartners.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Select the identities that you added and the group (use Cmd-Click for multiple selections) and then Click ",r.createElement(n.strong,null,"Execute")),"\n",r.createElement(n.img,{src:"/1681564958642.18461366409/BB_FG_GroupsSelectPartners.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the proposed changes for moving the users to the group and Click ",r.createElement(n.strong,null,"Ok")),"\n",r.createElement(n.img,{src:"/1681564958638.18431366405/BB_FG_GroupsConfirmPartners.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Back")," to return to the previous page."),"\n",r.createElement(n.img,{src:"/1681564958638.18431366404/BB_FG_GroupsClosePartners.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Select the group to confirm that the partners are showing as belonging in the group."),"\n",r.createElement(n.img,{src:"/1681564958642.18461366410/BB_FG_GroupsVerify.png",alt:"image"}),"\n"),"\n"),"\n",r.createElement(n.h2,{id:"create-a-routing-template"},r.createElement(n.a,{href:"#create-a-routing-template"},"Create a routing template")),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Templates")," under the ",r.createElement(n.strong,null,"Routes")," menu."),"\n",r.createElement(n.img,{src:"/1681564958674.18581366472/FG_RoutesMenuTemplates.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Create")," button at the bottom of the ",r.createElement(n.strong,null,"Routing Channel Templates")," page."),"\n",r.createElement(n.img,{src:"/1681564958678.18581366489/FG_Templates.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Enter ",r.createElement(n.strong,null,"BB Passthrough")," in the ",r.createElement(n.strong,null,"Template Name")," field and then click ",r.createElement(n.strong,null,"Next>>"),"."),"\n",r.createElement(n.img,{src:"/1681564958646.18461366415/BB_FG_TemplateCreateName.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the ",r.createElement(n.strong,null,"Special Characters")," settings and then click ",r.createElement(n.strong,null,"Next>>"),"."),"\n",r.createElement(n.img,{src:"/1681564958646.18461366416/BB_FG_TemplateCreateSpecialChars.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Add only ",r.createElement(n.strong,null,"BB Partners")," to both the ",r.createElement(n.strong,null,"Producer Groups")," and ",r.createElement(n.strong,null,"Consumer Groups")," tables."),"\n",r.createElement(n.img,{src:"/1681564958646.18461366413/BB_FG_TemplateCreateGroups1.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Next>>")," after adding ",r.createElement(n.strong,null,"BB Partners")," to both groups."),"\n",r.createElement(n.img,{src:"/1681564958646.18461366414/BB_FG_TemplateCreateGroups2.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the ",r.createElement(n.strong,null,"Provisioning Facts")," page and then click ",r.createElement(n.strong,null,"Next>>"),"."),"\n",r.createElement(n.img,{src:"/1681564958678.18581366487/FG_TemplateCreateProvisioningFacts.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the ",r.createElement(n.strong,null,"File Operation")," page and then click ",r.createElement(n.strong,null,"Next>>"),"."),"\n",r.createElement(n.img,{src:"/1681564958674.18581366479/FG_TemplateCreateFileOperation.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Add")," button on the ",r.createElement(n.strong,null,"Producer")," page."),"\n",r.createElement(n.img,{src:"/1681564958678.18581366483/FG_TemplateCreateProducerAdd.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Producer File Type")," pull-down menu and select ",r.createElement(n.strong,null,"Unknown"),"."),"\n",r.createElement(n.img,{src:"/1681564958678.18581366485/FG_TemplateCreateProducerUnknownMenuSelect.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Enter .+ in the ",r.createElement(n.strong,null,"File name pattern as regular expression")," field and then click ",r.createElement(n.strong,null,"Save"),"."),"\n",r.createElement(n.img,{src:"/1681564958678.18581366486/FG_TemplateCreateProducerUnknownPattern.png",alt:"image"}),"\n",r.createElement(n.p,null,"Setting the file pattern to the regular expression .+ allows for file names of one or more characters."),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Next>>")," on the ",r.createElement(n.strong,null,"Producer")," page."),"\n",r.createElement(n.img,{src:"/1681564958678.18581366484/FG_TemplateCreateProducerNext.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Add")," button on the ",r.createElement(n.strong,null,"Consumer")," page."),"\n",r.createElement(n.img,{src:"/1681564958674.18581366473/FG_TemplateCreateConsumerAdd.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Add")," button on the ",r.createElement(n.strong,null,"New Delivery Channel")," pop-up window."),"\n",r.createElement(n.img,{src:"/1681564958674.18581366474/FG_TemplateCreateConsumerNewDeliveryChannel.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Unknown")," in the ",r.createElement(n.strong,null,"Consumer File Type")," pull-down menu."),"\n",r.createElement(n.img,{src:"/1681564958674.18581366476/FG_TemplateCreateConsumerNewDeliveryChannelFileTypeMenu.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Enter ",r.createElement(n.strong,null,"${ProducerFileName}")," in the ",r.createElement(n.strong,null,"File name format")," field."),"\n",r.createElement(n.div,{"data-rehype-pretty-code-fragment":""},r.createElement(n.pre,{"data-language":"text","data-theme":"default"},r.createElement(n.code,{"data-language":"text","data-theme":"default"},r.createElement(n.span,{className:"line"},r.createElement(n.span,{style:{color:"#8d8d8d"}},"${ProducerFileName}"))))),"\n",r.createElement("br"),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the help information regarding file name formats by hovering over the ",r.createElement(n.strong,null,"File name format")," entry field and then click ",r.createElement(n.strong,null,"Save"),"."),"\n",r.createElement(n.img,{src:"/1681564958674.18581366475/FG_TemplateCreateConsumerNewDeliveryChannelFileTypeFormat.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Save")," on the ",r.createElement(n.strong,null,"New Delivery Channel")," pop-up window."),"\n",r.createElement(n.img,{src:"/1681564958674.18581366477/FG_TemplateCreateConsumerNewDeliveryChannelSave.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Save")," on the ",r.createElement(n.strong,null,"Consumer")," page."),"\n",r.createElement(n.img,{src:"/1681564958674.18581366478/FG_TemplateCreateConsumerSave.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"OK")," on the ",r.createElement(n.strong,null,"Routing Channel Template successfully created.")," pop-up message."),"\n",r.createElement(n.img,{src:"/1681564958678.18581366492/FS_TemplateCreated.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Review the settings for the new ",r.createElement(n.strong,null,"BB Passthrough")," routing channel template."),"\n",r.createElement(n.img,{src:"/1681564958650.18481366417/BB_FS_TemplateSummary.png",alt:"image"}),"\n"),"\n"),"\n",r.createElement(n.h2,{id:"create-routing-channels"},r.createElement(n.a,{href:"#create-routing-channels"},"Create routing channels")),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Channels")," option under the ",r.createElement(n.strong,null,"Routes")," menu."),"\n",r.createElement(n.img,{src:"/1681564958674.18581366471/FG_RoutesChannelsMenu.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click the ",r.createElement(n.strong,null,"Create")," button at bottom right to create a new ",r.createElement(n.strong,null,"Channel"),"."),"\n",r.createElement(n.img,{src:"/1681564958666.18531366447/FG_ChannelCreate.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Select ",r.createElement(n.strong,null,"BB Passthrough")," for the ",r.createElement(n.strong,null,"Routing Channel Template"),", ",r.createElement(n.strong,null,"bb-partner1")," for the ",r.createElement(n.strong,null,"Producer"),", and ",r.createElement(n.strong,null,"bb-partner2")," for the ",r.createElement(n.strong,null,"Consumer"),", and then click ",r.createElement(n.strong,null,"Save")," to create the new channel."),"\n",r.createElement(n.img,{src:"/1681564958626.18381366387/BB_FG_ChannelCreateP1toP2.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"OK")," on the ",r.createElement(n.strong,null,"Success")," pop-up window."),"\n",r.createElement(n.img,{src:"/1681564958626.18381366388/BB_FG_ChannelCreateP1toP2Success.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Repeat the prior steps to create a channel from bb-partner2 to bb-partner1."),"\n",r.createElement(n.img,{src:"/1681564958626.18381366389/BB_FG_ChannelCreateP2toP1.png",alt:"image"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Click ",r.createElement(n.strong,null,"Sign Out"),"."),"\n",r.createElement(n.img,{src:"/1681564958642.18461366412/BB_FG_SignOut.png",alt:"image"}),"\n"),"\n"),"\n",r.createElement(n.p,null,"In the next chapter, the fun begins as the partners start to securely exchange files."))}var m=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)};var c=t(7315),i=t(2125),o=t(403),u=t(4690),s=t(4184),g=t.n(s);const E={table:o.y6,a:o.IW,blockquote:o.R4,SubHeader:o.bU,img:o.fb,code:o.dn,QuizAlert:o.SA},p=r.memo((function(e){let{children:n}=e;return r.createElement(l.Zo,{components:{...E}},n)})),h=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:t=!0}}},children:l}=e,a=(0,r.useRef)(null),{0:m,1:o}=(0,r.useState)("");(0,r.useEffect)((()=>{if(!a.current)return;const e=a.current.querySelectorAll("h2,h3,h4,h5"),n=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&o(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{n.observe(e)})),()=>n.disconnect()}),[]);const u=(null===t||t)&&n;return r.createElement(r.Fragment,null,r.createElement("article",{className:g()(c.Y,!u&&c.e),ref:a},r.createElement(p,null,l)),u&&r.createElement(i.Z,{itemsList:n,maxDepth:1,currSection:m}))},d=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:t},tableOfContents:{items:l}}}}=e;return r.createElement(u.Z,{pathname:n,title:t||l[0].title||void 0})};function C(e){return r.createElement(h,e,r.createElement(m,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-sterling-docs-configuration-part-2-md-da5cb079a6a7fc31207c.js.map