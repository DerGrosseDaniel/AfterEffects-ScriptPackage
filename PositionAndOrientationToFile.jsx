{

    app.beginUndoGroup("Position and Orientation to File");

var frameLength = 1/app.project.activeItem.frameRate;

         var target = app.project.activeItem.selectedLayers[0];

          var  targetIn = target.inPoint
        var  targetOut = target.outPoint
         
         var output = "";
         var test = "hjsdf"
         
         for ( i = targetIn; i<= targetOut; i += frameLength){
               output = output + target.orientation.valueAtTime(i,true)
             }
         
         alert(output)

    app.endUndoGroup();
 
}
