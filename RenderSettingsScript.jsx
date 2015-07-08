//script by Colin Brayley, got from http://aenhancers.com/viewtopic.php?f=3&t=348
{//Scope limiting brace
/*################################
##  This is the render settings script by Colin Braley
##  This After Effects script is used to turn on some settings that are useful to setup before rendering
##  These incluse beging able to set the motion blur, shutterAngle, quality settings, resolution, and visibility settings
##  of layers and comps.  You can also affect nested comps with this script.
##  To run this script have a comp selected in your project window and then run it.
##  I have tested this script pretty thouroughly, but if anything get's messed up you can't blame me.
##  Posted to aenhancers.com on January 30, 2006
##  For more info, click on the help button on the script palette
##  Enjoy.
################################*/
app.beginUndoGroup("Render Settings");//Undo group
var proj = app.project;
var activeItem = proj.activeItem;
var safeToRunScript = activeItem != null && proj != null && activeItem instanceof CompItem;
var currComp = activeItem;  
if(! safeToRunScript )
   alert("Please have a project open, and a comp selected in the project window.");
else{         
   buildGUI();
    }//End else

//Below here is all function definitions.###################################

/*#########################################################################
###processComp()
###Takes a compItem as a parameter
###This function is called when the execute button is pressed.
###This preforms the actions specified in the UUI
###This returns nothing.
###########################################################################*/

function processComp(myComp)
{
   var currLayers = myComp.layers;
   var amt = currLayers.length;
   //--
   var doBestQuality = w.settings.quality.value;
   var doShutterAngle = w.settings.shutterAngle.value;
   var shutterAngle = w.settings.shutterSlider.value;
   var doMotionBlur = w.settings.motionBlur.value;
   var doFrameBlending = w.settings.frameBlending.value;
   var doFullResolution = w.settings.resolution.value;
   var doActivateLayers = w.settings.activateLayers.value;
   var doAffectNestedComps = w.controls.nestedComps.value;
   //--
   for(var i = 1; i <= amt; i++)
      {    
      var layer = currLayers[i];
      if(doBestQuality)
         setLayerQuality(layer);
      if(doShutterAngle)
         setCompShutterAngle(myComp, shutterAngle);
      if(doMotionBlur)
      {
         setLayerMotionBlur( layer);
         setCompMotionBlur( myComp );
      }
      if(doFrameBlending)
      {
         setLayerFrameBlending( layer );
         setCompFrameBlending( myComp );
      }
      if(doFullResolution)
         setCompResolution( myComp );
      if( doActivateLayers)
         activateLayer( layer );
      if(doAffectNestedComps)//Determines if we will process comps recursively
      {                    
      if (layer.source instanceof CompItem)//Recursive case
         processComp(layer.source);
      }
      
      
      }//End for loop
}//End function

/*#########################################################################
###buildGUI()()
###Takes no parameters
###This function builds the GUI window.
###That is all it does.
###returns nothing.
###########################################################################*/


function buildGUI()
{
w = new Window("palette", "Render Settings Script - By Colin Braley", [100, 100, 480, 490]);
w.center();

//now add panels
w.settings = w.add("panel", [15,15,365,180], "Settings");
w.controls = w.add("panel", [15, 200, 365, 375], "Controls");

//now add execution button
w.controls.execute = w.controls.add("button",[15,15,155,35], "Execute");
w.controls.execute.onClick = function(){ closeAndExecute();};

//Now add help button
w.controls.help = w.controls.add("button",[175, 15, 315, 35], "Help");
w.controls.help.onClick = function() { displayHelp();};

//Now add best quality switch
w.settings.qualityText = w.settings.add("statictext", [15,15, 130, 30], " BEST quality for layers");
w.settings.quality = w.settings.add("checkbox", [135,15,150,30]);

//Now a shutter angle switch
w.settings.shutterAngleText = w.settings.add("statictext",[15,40, 130, 55], "Alter shutter angle");
w.settings.shutterAngle = w.settings.add("checkbox", [135, 40, 150, 55]); 
w.settings.shutterSlider = w.settings.add("slider",[165, 40, 255, 55], 360, 0, 720);
w.settings.shutterSlider.onChange = function(){w.settings.shutterTextValue.text = w.settings.shutterSlider.value;};
w.settings.shutterTextValue = w.settings.add("edittext",[270, 40, 295, 55], w.settings.shutterSlider.value + "");

//Now add a motion blur switch
w.settings.motionBlurText = w.settings.add("statictext",[15,40 + 25, 130, 55 + 25], "Motion blur for layers");
w.settings.motionBlur = w.settings.add("checkbox", [135, 40 + 25, 150, 55 + 25]); 

//Now add a resolution switch
w.settings.resolutionText = w.settings.add("statictext",[15,40 + 25 + 25, 130, 55 + 25 + 25], "Set resolution to full");
w.settings.resolution = w.settings.add("checkbox", [135, 40 + 25 + 25, 150, 55 + 25 + 25]); 

//Now add a frame blending switch
w.settings.frameBlendingText = w.settings.add("statictext",[15,40 + 25 + 25 + 25, 130, 55 + 25 + 25 + 25], "Enable frame mix ");
w.settings.frameBlending = w.settings.add("checkbox", [135, 40 + 25 + 25 + 25, 150, 55 + 25 + 25 + 25]);

//Now add an active all layers switch
w.settings.activeLayersText = w.settings.add("statictext",[15,40 + 25 + 25 + 25 + 25, 130, 55 + 25 + 25 + 25 + 25], "Activate all layers");
w.settings.activateLayers = w.settings.add("checkbox", [135, 40 + 25 + 25 + 25 + 25, 150, 55 + 25 + 25 + 25 + 25]);

//Add a nested comps
w.controls.nestedCompsText = w.controls.add("statictext",[15,50,110,75], "Affect nested comps");
w.controls.nestedComps = w.controls.add("checkbox",[120, 50, 145, 70]);
//left top right bottom is how bounds works

w.show();//done now lets show the UI

}//End function

/*#########################################################################
###displayHelp()
###Takes no parameters
###This function is called when the help button is pressed
###This displays an alert() box with a help message
###returns nothing.
###########################################################################*/
function displayHelp()
   {
    alert("Help for RenderSettings Script:    \n"+
    "To use this script just click in the checkboxes\n"+
    "on the UI Panel.  When You click execute the \n"+
    "script will examine whatever comp you have  \n"+
    "currently selected in the project window and   \n"+
    "apply these settings to any layer in it.  This can \n"+
    "also affect nested comps.  To run the script you must \n"+
    "have a comp selected in the project window.          ");
    }    
/*#########################################################################
###closeAndExecute()
###Takes no parameters
###This function is called when the execute button is pressed
###This closes the window and preforms the requested actions
###returns nothing.
###########################################################################*/
function closeAndExecute()
{  
   processComp( currComp );
   w.close();
}
//setLayerQuality() sets a layers quality to best
//it returns nothing and it's parameter is a layer
function setLayerQuality( l )
{
   l.quality = LayerQuality.BEST;
}
//setCompResolution() takes a comp as a parameter
//and sets its resolution to best
//it returns nothing

function setCompResolution( c )
{ 
   c.resolutionFactor = [1,1];
}
//setCompMotionBlur() takes a comp as a parameter
//and sets its motion blur to on
//it returns nothing

function setCompMotionBlur( c )
{
   c.motionBlur = true;
}

//setLayerMotionBlur() takes a layer as a parameter
//It turns on its motion blur switch
//It returns nothing
function setLayerMotionBlur( l )
{
   l.motionBlur = true;
}
//setCompFrameBlending() takes a comp as a parameter
//and sets its frame blending to on
//it returns nothing
function setCompFrameBlending( c )
{
   c.frameBlending = true;
}

//setLayerFrameBlending() takes a layer as a parameter
//This function turns on the layer's frame blending to "frame mix"
//I don't think there is a way to change this to pixel motion
//returns nothing

function setLayerFrameBlending( l )
{
   l.frameBlending = true;//Frame mix only
}

//setCompShutterAngle() takes a comp and a number as a parameter
//it sets the comp's shutter angle to the number
//if the number has a decimal it is rounded
//if the number is less than 0 || greater than 720 an alert() box is used
//and the number is put within range
//returns nothing
function setCompShutterAngle( c, num )
{
   error = false;
   if(num < 0)
   {
      num = 0;
      error = true;
   }else if(num > 720)
   {
      num = 720;
      error = true;
   }else
   {
   if(error)
      alert("Please, set the shutter angle between 0 and 720");
      c.shutterAngle = Math.round( num ) ;
   }
}//End function


//activateLayer() takes a layer as a param
//it turns off the solo switch and makes the layer visible
//returns nothing

function activateLayer( l )
{
   l.enabled = true;
   l.solo = false;
}

app.endUndoGroup();//End the undo group

}//Scope Limiting Brace
//The End
