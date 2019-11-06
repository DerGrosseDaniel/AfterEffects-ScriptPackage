{
    function myScript(thisObj) {
        function myScript_buildUI(thisObj) {
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "LayerSelect", [0, 0, 300, 300]);

            res = "group{orientation:'column', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                            cursorSelect: Panel{text:'Select relative to cursor',orientation:'row', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                                selDesel: Checkbox{text:'',alignment:['fill', 'buttom'],},\
                                  myStaticText: StaticText{text:'(de)select'},\
                                  before: Button{text:'before'},\
                                  at: Button{text:'at'},\
                                  after: Button{text:'after'},\
                                  myStaticText: StaticText{text:'cursor.'},\
                             }\
                             nameSelect: Panel{text:'Select layer by name',orientation:'column', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                                lineA: Group{orientation:'row', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                                        selDesel: Checkbox{text:'',alignment:['fill', 'buttom'],},\
                                          myStaticTexta: StaticText{text:'(de)select layers with'},\
                                          searchText: EditText{text:'search Text',},\
                                          myStaticTextb: StaticText{text:'at the'},\
                                      }\
                                  lineB: Group{orientation:'row', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                                          beginning: Button{text:'beginning'},\
                                          middle: Button{text:'in'},\
                                          end: Button{text:'end'},\
                                          myStaticTextc: StaticText{text:'of name.'},\
                                      }\
                             }\
                    }"

            //Add resource string to panel
            myPanel.grp = myPanel.add(res);

            //set checkboxes
            myPanel.grp.cursorSelect.selDesel.value = true;
            myPanel.grp.nameSelect.lineA.selDesel.value = true;

            //Setup panel sizing and make panel resizable
            myPanel.layout.layout(true);
            myPanel.grp.minimumSize = myPanel.grp.size;
            myPanel.layout.resize();
            myPanel.onResizing = myPanel.onResize = function() {
                this.layout.resize();
            }
        
          myPanel.grp.nameSelect.lineB.beginning.onClick = function() {
              //gets active comp
                app.activeViewer.setActive();
                var activeComp = app.project.activeItem;
               //adds all layers which start after cursor to selection
                for(i = 1; i <= activeComp.numLayers;i++){
                    if(activeComp.layer(i).name.indexOf(myPanel.grp.nameSelect.lineA.searchText.text)==0){
                        if(myPanel.grp.nameSelect.lineA.selDesel.value){
                            activeComp.layer(i).selected = true;
                            }else{
                                activeComp.layer(i).selected = false;
                            }
                        }
                    }
   
            }
        
               myPanel.grp.nameSelect.lineB.middle.onClick = function() {
              //gets active comp
                app.activeViewer.setActive();
                var activeComp = app.project.activeItem;
               //adds all layers which start after cursor to selection
                for(i = 1; i <= activeComp.numLayers;i++){
                    if(activeComp.layer(i).name.indexOf(myPanel.grp.nameSelect.lineA.searchText.text)>=0){
                        if(myPanel.grp.nameSelect.lineA.selDesel.value){
                            activeComp.layer(i).selected = true;
                            }else{
                                activeComp.layer(i).selected = false;
                            }
                        }
                    }
            }
        
              myPanel.grp.nameSelect.lineB.end.onClick = function() {
              //gets active comp
                app.activeViewer.setActive();
                var activeComp = app.project.activeItem;
               //adds all layers which start after cursor to selection
                for(i = 1; i <= activeComp.numLayers;i++){
                    if(activeComp.layer(i).name.indexOf(myPanel.grp.nameSelect.lineA.searchText.text)==activeComp.layer(i).name.length-myPanel.grp.nameSelect.lineA.searchText.text.length){
                        if(myPanel.grp.nameSelect.lineA.selDesel.value){
                            activeComp.layer(i).selected = true;
                            }else{
                                activeComp.layer(i).selected = false;
                            }
                        }
                    }
            }
        
            myPanel.grp.cursorSelect.before.onClick = function() {
                 //gets active comp
                app.activeViewer.setActive();
                var activeComp = app.project.activeItem;
                //current time
                var currentTime = app.project.activeItem.time;
                //adds all layers which start after cursor to selection
                for(i = 1; i <= activeComp.numLayers;i++){
                    if(activeComp.layer(i).outPoint <= currentTime &&  !activeComp.layer(i).locked){
                        if(myPanel.grp.cursorSelect.selDesel.value){
                            activeComp.layer(i).selected = true;
                            }else{
                                activeComp.layer(i).selected = false;
                            }
                        }
                    }
            }

            myPanel.grp.cursorSelect.at.onClick = function() {
                        //gets active comp
                app.activeViewer.setActive();
                var activeComp = app.project.activeItem;
                //current time
                var currentTime = app.project.activeItem.time;
                //adds all layers which start after cursor to selection
                for(i = 1; i <= activeComp.numLayers;i++){
                    if(activeComp.layer(i).inPoint <= currentTime && activeComp.layer(i).outPoint >= currentTime &&  !activeComp.layer(i).locked){
                        if(myPanel.grp.cursorSelect.selDesel.value){
                            activeComp.layer(i).selected = true;
                            }else{
                                activeComp.layer(i).selected = false;
                            }
                        }
                    }
            }

            myPanel.grp.cursorSelect.after.onClick = function() {
                //gets active comp
                app.activeViewer.setActive();
                var activeComp = app.project.activeItem;
                //current time
                var currentTime = app.project.activeItem.time;
                //adds all layers which start after cursor to selection
                for(i = 1; i <= activeComp.numLayers;i++){
                    if(activeComp.layer(i).inPoint >= currentTime &&  !activeComp.layer(i).locked){
                        if(myPanel.grp.cursorSelect.selDesel.value){
                            activeComp.layer(i).selected = true;
                            }else{
                                activeComp.layer(i).selected = false;
                            }
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