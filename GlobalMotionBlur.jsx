{
    function myScript(thisObj) {
        function myScript_buildUI(thisObj) {
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Global Motion Blur", [0, 0, 300, 300]);

            res = "group{orientation:'row', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                              on: Button{text:'blur ON'},\
                              off: Button{text:'blur OFF'},\
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

            myPanel.grp.on.onClick = function() {
                app.beginUndoGroup("Enable Motion Blur globally");
                for (var i = 1; i <= app.project.numItems; i++) { //loop through all items in project
                    if (app.project.item(i) instanceof CompItem) { //is item a comp?
                        app.project.item(i).motionBlur = true; //activate motionBlur for Comp
                    }
                }
                app.endUndoGroup();
            }

            myPanel.grp.off.onClick = function() {
                app.beginUndoGroup("Disable Motion Blur globally");
                for (var i = 1; i <= app.project.numItems; i++) { //loop through all items in project
                    if (app.project.item(i) instanceof CompItem) { //is item a comp?
                        app.project.item(i).motionBlur = false; // deactivate motionBlur for Comp
                    }
                }
                app.endUndoGroup();
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
