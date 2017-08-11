# Theming Guide

Table of Contents
Theming overview 

Permanent changes to CSS............................................................................................ 9
Creating a theme.......................................................................................................... 9
Theme creation examples............................................................................................ 14
Changing the header image ...................................................................................... 14
Changing the background colour................................................................................ 16
Changing buttons 

## Theming overview
EQUELLA makes it easy to create and upload custom themes allowing you to tailor the look and feel of your site.

The purpose of this guide is to demonstrate to users how to identify web page elements and alter them to create a customised EQUELLA. 

## Permanent changes to CSS

Custom CSS code should be created in the customer.css file, to be imported with a theme. This is the only file where CSS should be permanently altered. It is the last stylesheet to be loaded, so any rules set in this file will overwrite matching rules from other stylesheets.

This file can be created from scratch, copied from one of the pre-configured themes, or downloaded from your EQUELLA site using one of the previously described tools.

## Creating a theme
Two completed themes, Grape and Red, are available for download from the EQUELLA Support site in the Customisation folder. These can be used as a reference, if required. It is also possible to download a custom theme from the Theme settings page, although the Default theme cannot be downloaded.


A valid EQUELLA theme can be made up of images and/or customer.css file, arranged in a suitable folder structure and added to an archive (.zip) file.

Folders must be arranged in such a way that EQUELLA knows where to find the appropriate files. Absolute links to the images can be found by exploring the resources using a web development tool, although there is an important distinction between what the addresses are on the site and the way the folders need to be arranged. Where the relative image URL reads:

/p/r/29303/com.tle.web.sections.equella/images/theimage.png

The folder structure would ignore the 5-digit build number (29303), to read:

/p/r/com.tle.web.sections.equella/images/theimage.png

The folder structure of the sample themes gives a good idea of how to setup your own:
* css/customer.css
* images/
* p/r/com.tle.web.sections.equella/images/
* p/r/com.tle.web.sections.standard/images/ajax/
* p/r/com.tle.web.viewitem.largeimageviewer/images/
With the files and folders in place, your theme now needs to be archived.

### How to archive your theme
1. With a compression utility installed, such as Winrar or 7-Zip, the workload required to archive your theme will be greatly reduced. While it is possible to achieve the same results using default Windows programs, these utilities are freely available on the internet and they make the process easier.
2. You will presumably have the previously mentioned theme folders in a location similar to ‘C:\My Documents\EQUELLA\themes\green\’. 
3. Select the contents of this folder, and right-click on the selection.
4. With either of these compression utilities installed, specific contexts exist within the right-click menu to create archives. 

### Create a Winrar archive
1. Select the Winrar option to Add to archive.... 
2. On the resulting page, give the archive a name and use the ZIP archive format.
3. Click OK to save the archive. You now have a completed theme archive.

### Create a 7-Zip archive
1. Expand the 7-Zip menu, and select Add to archive.... 
2. On the resulting page, give the archive a name and assign it the Archive format: zip.
3. Click OK to save the archive. You now have a completed theme archive.

### Confirm the folder structure
1. Open the file to ensure the folder structure is correct.  You should not see the parent folder of the theme files in the archive.

### How to import a theme
1. Login to EQUELLA.
2. Select Settings from the left-hand navigation menu, then select Themes from the list of options.
3. If there is already a theme loaded, click Remove custom theme. 
4. If there is no theme loaded, click Browse.
5. Browse to your theme archive and select it.
6. Once the filename is loaded in the file uploader, click Upload.
7. Force a browser cache refresh by pressing Ctrl+F5. This will load the theme changes.

## Theme creation examples
### Changing the header image
1. Navigate to EQUELLA in your browser of choice. 
2. Right-click on the header image and select Inspect Element.
3. This opens the Elements view, where the element you clicked on is selected and the applicable styles displayed in the right-hand pane. If the 
```
<div id=’header’>
```
element didn’t select automatically, click on it.

4. In the Styles pane, view the Matched CSS Rules. Find the CSS for #header. Note how a background image is defined for this div.

5. Click this link to view the image and its details in the Resources view. This section exists for all resources associated with the website and can be handy when needing to replace other images.


6. Note the dimensions (1400 x 94), and the URL.
NOTE: When recreating the folder structure in the theme archive, it is important to use /p/r/com.tle.web... and not to include the build number, e.g. /p/r/29303/com.tle.web... – INCORRECT. /p/r/com.tle.web... – CORRECT.

7. Create a new header image, or save and modify the existing one, as desired. Ensure the dimensions remain the same as the original.

8. Save the image by right-clicking the URL and selecting Save link as..., or right-clicking the image and selecting Save image as..., with the same name as the original. In this case header-bg.ltr.gif, and place it in the /p/r/com.tle.web.sections.equella/images directory of your theme.

9. Even at this early stage, the theme can be uploaded to EQUELLA. Simply zip the folder(s) and upload.

### Changing the background colour
#### Determining the relevant elements
1. By observing the element inspector you can see how the background is constructed.
2. By hovering the mouse cursor over the different divs in Firebug, you can see which div applies to which area. The div with the id=”body” covers the area between the header and the footer that you are interested in. This controls the predominantly blue background that you wish to alter.

3. Follow the subsequent steps, as illustrated, to turn off the background setting in this div and view the result.
a. Click on the HTML element 
```
<div id=”body”>
```
b. In the style pane, click on the icon alongside the background rule to disable the CSS. By doing this, it becomes apparent where in the document this div appears.

c. Notice the area no longer covered by the defined image. Any changes to the background rule of the body div will appear here.

4. The next nested div is that with id=”body-wrap1”. This handles the lower section of the body background.

5. Turn the background off as described in Step 3. 

6. Expand the “body-wrap2” div in the Firebug browser. This handles the main section of the body background.

7. Turn the background off as described in Step 3. 

Now that you know that these elements control the body background, you can set about making changes.

At this point, changes can be made in one of two ways. Given what you know about the composition of the background, and that it is made up of three images, you can decide to either make changes to these images, or ignore them completely.

In the following example, ignore them completely, overwriting the previously set CSS rules for the body background with a flat colour.

### Making changes using customer.css
1. Create a new folder, entitled ‘css’, and within that folder create a new text file, entitled ‘customer.css’.
2. Create new background rules for the body, body-wrap1 and body-wrap2 divs, and assign orange as the colour.

```
E.g. #body { background: orange; }
#body-wrap1 { background: orange; }
#body-wrap2 { background: orange; }

```

As the customer.css file is included after the other styles sheets, its rules will overwrite that of the other styles.

3. Save the file within the ‘css’ folder.
4. Create a theme file and import it as described in the Creating a theme section. 
5. View the changes in the browser. 


This approach creates a flat, single-colour background that might not appeal. To create a more interesting feel, custom images can be uploaded, or the existing ones can be modified to suit your preferred colour scheme.

In the following example you will edit the existing images to create a green background.

### Edit existing images
1. As this is a parallel example to that of the previous ‘orange’ background, any changes made to the body, body-wrap1 or body-wrap2 divs should be reverted to the original. This way the appropriate images are being loaded by default.
2. Using Firebug, you can determine that the divs contain the following images which will need to be edited:

a. body: /images/body-bg-top.gif (1 x 120)

b. body-wrap1: /images/body-bg-bottom.gif (1 x 87)

c. body-wrap2: /images/body-bg.gif (1364 x 471)

The body-bg-top.gif and body-bg-bottom.gif are 1 pixel-wide images designed to repeat over the width of the page. The body-bg.gif is a large image designed to sit alone in the background.

3. Save these images. This can be easily achieved using Chrome Developer Tools.

a. Inspect an element of an EQUELLA page.

b. In the subsequent window, click on Resources. 

c. Locate the images in the left-hand menu.

d. Click through each one, right-clicking the image URL and saving as... as described in Changing the header image step.

4. Open the images in your preferred image or photo editor, and make the appropriate adjustments to overlay a new colour onto them.

5. Save the images with the same names as the originals. This is crucial for the correct application of this theme.

6. Arrange them in the correct directory structure. For example, where the body-bg.gif image has the following relative URL: 
/p/r/29303/com.tle.web.sections.equella/images/body-bg.gif the directory 
structure and filename in the archive must be: 
/p/r/com.tle.web.sections.equella/images/body-bg.gif

7. Create the theme archive and import it into EQUELLA.

8. View the changes in your browser. T

9. Obviously, this result is not ideal. While fine for pages that are small enough to not need filling, once the page extends beyond the scope of the images, it starts to look patchy. Some changes to the CSS are needed.

10. Using Chrome’s Developer Tools, you can see that on the body div, there is a background-color rule, setting the background to that blue colour. You need to change this to match that of your new theme.

11. Open or create the customer.css file.

12. Add a background-color rule on the body div to overwrite the default. For example, #body { background-color: #10ac0a; }.

13. Put the customer.css file inside the css directory and save the theme archive.

14. Import the file into EQUELLA as per previous instructions, and view the results.

15. 
To complete the full theme background transformation, there are four other images that will need editing. 
* topbar-bg.gif
* header-bg.ltr.gif
* footer-bg.gif
* footer-equella.gif.

16. Download these images from your EQUELLA website for editing.
Both images, 2 (header-bg.ltr.gif) and 4 (footer-equella.gif), are branded images. These can be altered to reflect the branding of your institution. It is important to create custom images at the same dimensions as the originals to avoid layout problems. The dimensions can be found by loading the images into an image editor, or on the specific resource page in Chrome’s Developer Tools.

17. Make the appropriate changes and save the images.
18. Load them into the theme archive and reload the archive into EQUELLA.
19. Trigger a cache refresh in your browser by pressing Ctrl+F5.

### Changing buttons
It is also possible to change many of the buttons that exist within EQUELLA. Many of EQUELLA’s buttons are loaded from images, which can be edited in the same way as other images.

Buttons use a background image with text overlaid dynamically. The background image can be easily changed without affecting the message.


The images these buttons are made from look like this:
* Search (button-big.png)
* Help and Screen Options (button-down.png)
* Select user (button.gif)

These button images are made up of one image repeated twice (or three times) vertically. The lower half is given a different colour to the first, which becomes the background for the image when it is hovered over by a user’s mouse cursor.

When a button is placed on the page, it is done so with the lower half of the image hidden. An entry is made into the CSS hover sub-class to handle the position of the background image along the y-axis; background-position-y. Setting this value at half the total height of a button image, with a negative operator, has the effect of raising the image up to display the bottom half.

### Altering button backgrounds example
Continuing with our colour theme, the hover colour will need to be changed to make it more neutral.
1. Download the following images from your EQUELLA site, using your preferred web tools:
* button-big.png
* button-down.png
* button.gif
2. Open the images in your preferred photo or image editor.
3. Make the changes you need. In this example, the hue has been adjusted to fit in with the existing theme, as below:
* Search (button-big.png)
* Help and Screen Options (button-down.png)
* Select user (button.gif)
4. Save the changes.
5. Move the saved images into your theme archive. In the case of these three images, they should be placed in the /p/r/com.tle.web.sections.equella/images directory, with the background images.
6. ‘Zip’ the archive and import the theme into EQUELLA. 

The scope of the editable EQUELLA environment is not limited to the examples and suggestions outlined in this document. Users are welcome to apply the concepts covered in this guide to identify and alter any and all page elements.

