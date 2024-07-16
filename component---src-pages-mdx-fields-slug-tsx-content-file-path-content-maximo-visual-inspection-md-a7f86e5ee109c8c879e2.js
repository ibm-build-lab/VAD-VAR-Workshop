"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9496],{21114:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return f}});var a=n(11151),l=n(67294);function i(e){const t=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",strong:"strong",ol:"ol",li:"li",img:"img",blockquote:"blockquote",code:"code",em:"em",ul:"ul"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"maximo-visual-inspection-mvi---part-1"},l.createElement(t.h1,{id:"maximo-visual-inspection-mvi---part-1"},"Maximo Visual Inspection (MVI) - Part 1"),"\n",l.createElement(t.p,null,"In this lab you will first see the connection between Maximo Monitor and MVI."),"\n",l.createElement(t.p,null,"Then you will create your own data set, label, and augment using an MVI instance."),"\n",l.createElement(t.p,null,"HEADS UP! L3 Quiz Content denoted with 🟢"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"maximo-monitor-and-mvi"},l.createElement(t.h2,{id:"maximo-monitor-and-mvi"},l.createElement(t.a,{href:"#maximo-monitor-and-mvi"},"Maximo Monitor and MVI")),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-1-log-in-to-maximo-application-suite-navigator"},l.createElement(t.h2,{id:"step-1-log-in-to-maximo-application-suite-navigator"},l.createElement(t.a,{href:"#step-1-log-in-to-maximo-application-suite-navigator"},"Step 1: Log in to Maximo Application Suite Navigator")),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Actions:")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the ",l.createElement(t.strong,null,"MVI URL")," link from the email you received containing instructions to use the demo environment."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"IBM Maximo Application Suite log in page opens. Enter ",l.createElement(t.strong,null,"MVI Username (A)")," and ",l.createElement(t.strong,null,"Password (B)"),"  and click ",l.createElement(t.strong,null,"Log\nin")),"\n"),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.003.png",alt:""}),"\n",l.createElement(t.p,null,"Once the login credentials are accepted, the MAS Application ",l.createElement(t.strong,null,"Suite navigator")," window opens. Several applications that make up the Maximo Application Suite are displayed. In this demo, the focus will be on the Maximo Visual Inspection application; however, Part One of this demo, briefly looks at MVI AI model inspection results in the MAS Monitor application. (Note: in this demo environment, only the necessary applications are available for completing MVI L3)."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Note: If this is your first-time logging into the MAS, you may be prompted to view a quick application tour (how-to tutorial). Please dismiss any such tours for the purposes of this demo."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.004.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"In the MAS ",l.createElement(t.strong,null,"Suite navigator")," page, click on the ",l.createElement(t.strong,null,"Visual Inspection (A)")," tile."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.005.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"Click ",l.createElement(t.strong,null,"Get started (A)")," on the MVI ",l.createElement(t.strong,null,"Welcome to IBM Maximo Visual Inspection")," screen."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.006.jpeg",alt:""}),"\n",l.createElement(t.p,null,"The ",l.createElement(t.strong,null,"Data sets")," page opens."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.007.jpeg",alt:""}),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-2-create-a-dataset-for-model-training-in-maximo-visual-inspection"},l.createElement(t.h2,{id:"step-2-create-a-dataset-for-model-training-in-maximo-visual-inspection"},l.createElement(t.a,{href:"#step-2-create-a-dataset-for-model-training-in-maximo-visual-inspection"},"Step 2: Create a Dataset for Model Training in Maximo Visual Inspection")),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"What is an MVI dataset, and why do you need to create one?")),"\n",l.createElement(t.p,null,"As a first step towards building your AI inspection model, you must create a dataset in MVI containing images of clean and dirty tanks to teach the model what each class looks like."),"\n",l.createElement(t.p,null,"Data is at the heart of machine learning (ML). In the case of vision-based models, this data takes the form of images or videos. Built-in MVI ML models intelligently detect and learn patterns in the uploaded dataset and analyze this data repeatedly until it can discern distinctions and ultimately recognizes objects of interest in the images. For example, to train a computer to recognize automobile tires, you need to feed it with vast quantities of tire images and tire-related items to learn the differences and identify a tire, especially one with defects."),"\n",l.createElement(t.p,null,"For this use case model, you will create a dataset with a limited number of clean and dirty tank images for brevity; however, in real world scenarios, a computer vision model would require many more images and processing time than this demonstration offers."),"\n",l.createElement(t.p,null,"In this demo, you manually upload saved tank images from your local machine to the MVI application dashboard, however, built-in image capture modes in MVI Mobile and MVI Edge applications (parts of the MVI solution) can also be used to collect and copy images automatically into the MVI application. Now it's time to start creating a dataset."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Action:")),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"On the MVI ",l.createElement(t.strong,null,"Data sets")," screen, Click the ",l.createElement(t.strong,null,"Create + (A)")," blue icon on the top right."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.008.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"Enter ",l.createElement(t.code,null,"Sedimentation Tanks <YOUR INITIALS>")," for the ",l.createElement(t.strong,null,"Name")," field in the ",l.createElement(t.strong,null,"Create data set")," window (since you are sharing the Maximo Visual Inspection demo environment with other people a unique identifier is required to avoid name conflicts) ",l.createElement(t.strong,null,"(A).")),"\n",l.createElement(t.li,null,"Click ",l.createElement(t.strong,null,"Create (B)"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.009.jpeg",alt:""}),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Important:")," This demo script does not address dataset names with any unique identifier. Hence to follow along as an example, if you are instructed to click on the ",l.createElement(t.strong,null,l.createElement(t.em,null,"Sedimentation Tanks"))," dataset, you would instead click on ",l.createElement(t.strong,null,l.createElement(t.em,null,"Sedimentation Tanks <YOUR INITIALS>"))," dataset, i.e., the dataset you named along with your unique identifier."),"\n",l.createElement(t.ol,{start:"8"},"\n",l.createElement(t.li,null,"Click on the lower half of the newly created ",l.createElement(t.strong,null,"Sedimentation Tanks")," tile (where a light grey image icon is shown)."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.010.jpeg",alt:""}),"\n",l.createElement(t.p,null,"Once you click on this tile, a window opens for the data set you just created. As shown in the upcoming steps, you can perform several key operations on this page, such as uploading images, labeling objects, augmenting data, and training your model."),"\n",l.createElement(t.ol,{start:"9"},"\n",l.createElement(t.li,null,"Click ",l.createElement(t.strong,null,"Import Files")," to import the model training tank images from the directory where you unzipped the sample files."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.011.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"10"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Navigate to the directory location where you unzipped the ",l.createElement(t.strong,null,"Images of Sedimentation Tanks for training")," folder, downloaded and extracted in the",l.createElement(t.a,{href:"/maximo/mvi-prereq#step-2-download-the-training-and-validation-tank-images-for-the-ai-model"}," Pre-work Step 2.")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select all the tank images from the folder and click ",l.createElement(t.strong,null,"Open"),"."),"\n"),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.024.jpeg",alt:""}),"\n",l.createElement(t.p,null,"After a few seconds, the images are uploaded to your newly created dataset. This dataset includes several photos of clean and dirty sedimentation tanks. You are now ready to label these images."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-3-label-the-dataset"},l.createElement(t.h2,{id:"step-3-label-the-dataset"},l.createElement(t.a,{href:"#step-3-label-the-dataset"},"Step 3: Label the Dataset")),"\n",l.createElement(t.p,null,"In this step, you will label the tank images. Labeling is tagging the input images with information about its content. In object detection, this would involve highlighting occurrences of items of interest. In the case of this demo, you will go through each of the uploaded tank images and highlight the portion of the image that represents a clean or a dirty tank. During the training phase, these labelled images will allow your model to learn which part of the image represents a tank and next whether that image portion contains a clean or a dirty tank."),"\n",l.createElement(t.p,null,"As you can imagine, labeling the images correctly is critical to the accuracy of the model you are creating because it directly impacts the overall quality of the trained model. Quite simply, when it comes to identifying objects or classifying images, you want a use case domain expert – the person with the relevant subject matter expertise (SME) – to be labeling these images. This will ensure the highest quality of input into the model training. Traditionally, data scientists have been the focal point of AI initiatives and have wasted their precious time labelling data (despite not even being a domain expert; for example, would a data scientist be able to better label a dirty tank than the on-site inspection engineer?). With MVI, a domain expert – with no data science expertise– can label the images and then subsequently build a model based on those images."),"\n",l.createElement(t.p,null,"This approach lowers the barrier to entry and empowers domain experts with limited to no AI training the ability to create and deploy working AI models in a matter of hours, not days or weeks."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Actions:")),"\n",l.createElement(t.p,null,"Once all the pictures are uploaded in MVI perform the following steps:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"From the Select files dropdown click ",l.createElement(t.strong,null,"All (A)")," to automatically select all the dataset images."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.012.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Click ",l.createElement(t.strong,null,"Label objects (B)"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.013.jpeg",alt:""}),"\n",l.createElement(t.p,null,"The ",l.createElement(t.strong,null,"Label objects / Sedimentation Tanks")," page opens. This is where you create labels for clean and dirty tanks and assign them to the relevant portion of the images in the dataset. Various sections of the Label objects page user interface for layout reference are highlighted below."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.026.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"To start the labeling process, you must define the labels (clean and dirty). Click ",l.createElement(t.strong,null,"+ Add label")," in the ",l.createElement(t.strong,null,"Objects")," window on the far right."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.027.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"In the ",l.createElement(t.strong,null,"Add objects")," window that opens, type “clean” in the ",l.createElement(t.strong,null,"Create object")," field ",l.createElement(t.strong,null,"(A)")," and then click the ",l.createElement(t.strong,null,"Add")," button ",l.createElement(t.strong,null,"(B).")),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.028.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"Now, type “dirty” in the ",l.createElement(t.strong,null,"Add objects")," window and click ",l.createElement(t.strong,null,"Add"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.029.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"Click ",l.createElement(t.strong,null,"Ok")," to complete the Add label process."),"\n",l.createElement(t.li,null,"Once the labels are defined, you can start the process of labelling the tank objects appropriately. Make sure the first tank image is selected in the Image Navigator (you will see a dark blue box around the selected image in the Image Navigator on the left). Select the ",l.createElement(t.strong,null,"clean")," label name from the ",l.createElement(t.strong,null,"Objects")," window on the right ",l.createElement(t.strong,null,"(A).")),"\n",l.createElement(t.li,null,"Click the ",l.createElement(t.strong,null,"Box")," icon from the selection menu ",l.createElement(t.strong,null,"(B)")," and draw a box around a portion of the image that denotes the clean or dirty tank ",l.createElement(t.strong,null,"(C)"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.030.jpeg",alt:""}),"\n",l.createElement(t.p,null,"Due to potential random image sorting, it may be possible that the first image you will see in the image navigator may be of a dirty tank. In this case, choose the ",l.createElement(t.strong,null,"dirty")," label instead of ",l.createElement(t.strong,null,"clean")," and label the first image in step 7 of this section appropriately."),"\n",l.createElement(t.p,null,"In case you make a mistake drawing the box, select the erroneous box and click the ",l.createElement(t.strong,null,"trashcan")," icon right next to the label. You can also press ",l.createElement(t.strong,null,"CTRL + Z")," or ",l.createElement(t.strong,null,"Command + Z")," on your Windows and Mac keyboard, respectively, to undo the last action."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.032.png",alt:""}),"\n",l.createElement(t.ol,{start:"9"},"\n",l.createElement(t.li,null,"Label all the pictures in the Image Navigator using the instructions in the previous steps. You can click the ",l.createElement(t.strong,null,"blue downward arrow")," button to scroll through and select the images in sequence for labeling."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.033.png",alt:""}),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Image Labelling Tips:")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Tanks with blue water are clean."),"\n",l.createElement(t.li,null,"MVI remembers your previous label selection, so you do not need to click on the ",l.createElement(t.strong,null,"clean")," or ",l.createElement(t.strong,null,"dirty")," labels every time to label each new image. Just select the appropriate label the first time you start object labeling and continue to use it till it is required to switch to another object label, for example, switching from labeling a clean tank image to a dirty tank image and vice versa."),"\n"),"\n",l.createElement(t.p,null,"For your convenience, a light blue bar highlights the label that is currently in selection, as shown in the screenshot below."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.035.png",alt:""}),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"If there is more than one tank (or portion of tanks) in an image, please draw separate label boxes around each tank, as shown in the screenshot below."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.037.png",alt:""}),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Once all tank images in the Image Navigator are appropriately labelled, click the ",l.createElement(t.strong,null,"Back")," icon (not your browser’s back button) to navigate back to the ",l.createElement(t.strong,null,"Data set / Sedimentation Tanks")," page."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.038.jpeg",alt:""}),"\n",l.createElement(t.p,null,"The Sedimentation Tanks data set page opens. Notice how the newly created labels are shown along with each corresponding tank image (few labels are highlighted in the screenshot below)"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.014.jpeg",alt:""}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-4-data-augmentation"},l.createElement(t.h2,{id:"step-4-data-augmentation"},l.createElement(t.a,{href:"#step-4-data-augmentation"},"Step 4: Data Augmentation")),"\n",l.createElement(t.p,null,"MVI offers an easy and cost-effective way to augment data sets. At this point, you have labelled all the tank images in the uploaded data set."),"\n",l.createElement(t.p,null,"When building out a deep learning computer vision model, the more images added to the data set, the more accurate the model will generally be. However, there may be times when you do not have a dataset as varied or large enough to create an accurate and generalized model, and the cost of acquiring new data is too high."),"\n",l.createElement(t.p,null,"To address this pain point, MVI provides image augmentation capabilities, where filters can be applied to perform operations such as flip, blur, sharpen, and crop, to create additional images, thus increasing model performance and decreasing the cost to acquire more data. This augmentation process multiplies the original number of images by several folds. And the good news is that any labeling that has been done in the original images is maintained in the new augmented images to avoid rework."),"\n",l.createElement(t.p,null,"For this demo, it is fair to assume that a posted field camera is unlikely to take pictures of the tanks under the same conditions every time. The lighting will vary depending on weather and time of day. If the camera is rotatable, then it’s orientation to the tank and image focus can also be inconsistent. Rather than trying to provide images for all possible scenarios, image augmentation can help simulate these different conditions. This is how, data augmentation helps add additional data to your dataset to improve model performance (accuracy). You will use a few of the available MVI data augmentation options to add volume and variety to your tank images data set."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Actions:")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Click ",l.createElement(t.strong,null,"Augment data"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.015.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"The ",l.createElement(t.strong,null,"Augment data")," window opens and displays all of MVI’s available data augmentation filters. Select filters ",l.createElement(t.strong,null,"Sharpen"),", ",l.createElement(t.strong,null,"Crop"),", ",l.createElement(t.strong,null,"Rotate"),", ",l.createElement(t.strong,null,"Vertical flip")," and ",l.createElement(t.strong,null,"Horizontal flip")," to generate additional images ",l.createElement(t.strong,null,"(A)"),". Notice the number of images under ",l.createElement(t.strong,null,"New creations")," and ",l.createElement(t.strong,null,"New total")," labels increases as more filters are selected."),"\n",l.createElement(t.li,null,"Click ",l.createElement(t.strong,null,"Continue (B).")),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.040.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"The ",l.createElement(t.strong,null,"Augment data")," window opens. Name the new dataset by typing ",l.createElement(t.code,null,"Augmented Sedimentation Tank <YOUR INITIALS>")," ",l.createElement(t.strong,null,"(A)")),"\n",l.createElement(t.li,null,"Click ",l.createElement(t.strong,null,"Create data set")," to create your new augmented data set ",l.createElement(t.strong,null,"(B)")),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.041.jpeg",alt:""}),"\nOnce you click ",l.createElement(t.strong,null,"Create data set"),", you can track the progress of the data augmentation process in a small window that appears at the top right of the screen."),"\n",l.createElement(t.p,null,"In this window;"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"A blue progress bar denotes the data augmentation is in progress."),"\n",l.createElement(t.li,null,"A completion confirmation message and a green check mark indicate the completed process."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.043.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"Click the ",l.createElement(t.strong,null,"Data set")," breadcrumb link to return to the main ",l.createElement(t.strong,null,"Data sets")," page, where you can see your newly created augmented dataset."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.016.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"7"},"\n",l.createElement(t.li,null,"The main ",l.createElement(t.strong,null,"Data sets")," page opens and displays both the original and augmented dataset. Notice the increased number of images in the augmented dataset compared to the original dataset (the number of images in each dataset is shown right under its name in the tile). Click on the lower half (the water tank picture) of your newly created ",l.createElement(t.strong,null,"Augmented Sedimentation Tanks")," tile."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.017.jpeg",alt:""}),"\n",l.createElement(t.ol,{start:"8"},"\n",l.createElement(t.li,null,"Once your augmented dataset page opens, notice how all the MVI generated augmented images have a small black (“magic”) icon at the bottom right of the image. Also, how image labels are automatically transferred from the original images to their corresponding augmented images."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attatchments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.018.jpeg",alt:""}),"\n",l.createElement(t.p,null,"Congratulations, you have created a new augmented dataset from the original that is ready to be trained. Now it’s time to create the object detection model using this augmented dataset."),"\n",l.createElement(t.p,null,"Part 2 of the MVI lab is available ",l.createElement(t.a,{href:"/maximo/visual-inspection2"},"here"),".")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)},r=n(94184),s=n.n(r),c=n(24690),m=n(81140),u=n(48623),h=n(88531),d=n(13383),g=n(27315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:i,updated:o}}},children:r}=e,c=(0,l.useRef)(null),{0:p}=(0,l.useState)(""),b=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:i,updated:o},t[0].title||a||""),l.createElement(h.Z,{className:g.YS},l.createElement("article",{className:s()(g.Y2,!b&&g.ey),ref:c},l.createElement(u.Z,{components:{h1:()=>null}},r)),b&&l.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:p})))},b=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(p,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-maximo-visual-inspection-md-a7f86e5ee109c8c879e2.js.map