{
    function myScript(thisObj) {
        function myScript_buildUI(thisObj) {
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "ProxySwitcher", [0, 0, 300, 300]);

            res = "group{orientation:'row', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                              myStaticText: StaticText{text:'all proxies:'},\
                              on: Button{text:'ON'},\
                              off: Button{text:'OFF'},\
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
                for (var i = 1; i <= app.project.numItems; i++) {
                    try {
                        app.project.item(i).useProxy = true;
                    } catch (e) {}
                }
            }

            myPanel.grp.off.onClick = function() {
                for (var i = 1; i <= app.project.numItems; i++) {
                    app.project.item(i).useProxy = false;
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
