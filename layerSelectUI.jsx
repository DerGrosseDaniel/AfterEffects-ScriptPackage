{
    function myScript(thisObj) {
        function myScript_buildUI(thisObj) {
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "LayerSelect", [0, 0, 300, 300]);

            res = "group{orientation:'row', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                              myStaticText: StaticText{text:'select'},\
                              before: Button{text:'before'},\
                              at: Button{text:'at'},\
                              after: Button{text:'after'},\
                              myStaticText: StaticText{text:'cursor.'},\
                    }"

            //Add resource string to panel
            myPanel.grp = myPanel.add(res);


            //Setup panel sizing and make panel resizable
            myPanel.layout.layout(true);
            myPanel.grp.minimumSize = myPanel.grp.size;
            myPanel.layout.resize();
            myPanel.onResizing = myPanel.onResize = function() {
                this.layout.resize();
            }
        
            myPanel.grp.before.onClick = function() {
                 //gets active comp
                app.activeViewer.setActive();
                var activeComp = app.project.activeItem;
                //current time
                var currentTime = app.project.activeItem.time;
                //adds all layers which start after cursor to selection
                for(i = 1; i <= activeComp.numLayers;i++){
                    if(activeComp.layer(i).outPoint <= currentTime &&  !activeComp.layer(i).locked){
                        activeComp.layer(i).selected = true;
                        }
                    }
            }

            myPanel.grp.at.onClick = function() {
                        //gets active comp
                app.activeViewer.setActive();
                var activeComp = app.project.activeItem;
                //current time
                var currentTime = app.project.activeItem.time;
                //adds all layers which start after cursor to selection
                for(i = 1; i <= activeComp.numLayers;i++){
                    if(activeComp.layer(i).inPoint <= currentTime && activeComp.layer(i).outPoint >= currentTime &&  !activeComp.layer(i).locked){
                        activeComp.layer(i).selected = true;
                        }
                    }
            }

            myPanel.grp.after.onClick = function() {
                //gets active comp
                app.activeViewer.setActive();
                var activeComp = app.project.activeItem;
                //current time
                var currentTime = app.project.activeItem.time;
                //adds all layers which start after cursor to selection
                for(i = 1; i <= activeComp.numLayers;i++){
                    if(activeComp.layer(i).inPoint >= currentTime &&  !activeComp.layer(i).locked){
                        activeComp.layer(i).selected = true;
                        }
                    }
            }

            return myPanel;
        }


        var myScriptPal = myScript_buildUI(thisObj);


        if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
            myScriptPal.center();
            myScriptPal.show();
        }
    }



    myScript(this);
}