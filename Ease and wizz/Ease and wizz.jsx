#target aftereffects

// Ease and Wizz 2.0.3
// Ian Haigh 2012 (mail@ianhaigh.com)

// An After Effects adaptation of Robert Penner's easing equations.
// Installation and usage at http://aescripts.com/ease-and-wizz/
// (apologies to Jarvis Cocker)

var EASING_FOLDER        = 'easingExpressions';
var CLEAR_EXPRESSION_BTN = false; // this adds a button to the palette, "clear", that deletes expressions on all selected properties. Off by default.
var easingEquation       = "";
var palette;

// palette controls
var easingList;
var typeList;
var keysList;
var curvaceousCheckbox;

// define values for the controls
var keysLookup = new Object();
keysLookup['-all'] = 'All';
keysLookup['-startEnd'] = 'Start and end';
keysLookup['-startOnly'] = 'Start only';

var inOutLookup = new Object();
inOutLookup['inOut'] = 'In + Out';
inOutLookup['in'] = 'In';
inOutLookup['out'] = 'Out';

var easingTypesAry = ['Expo', 'ExpoSmoothStartEnd', 'Circ', 'Quint', 'Quart', 'Quad', 'Sine', '-', 'Back', 'Bounce', 'Elastic']; 

var activeItem;
var selectedProperties;

function getHashValues(hash)
{ // {{{
	var ary = new Array();
	for (k in hash) {
		ary.push(hash[k]);
	}

	return ary;
} // }}}

function getHashKeys(hash)
{ // {{{
	var ary = new Array();
	for (k in hash) {
		ary.push(k);
	}

	return ary;
} // }}}

function main(thisObj)
{ //{{{
	createPalette(thisObj);
	/*
	activeItem = app.project.activeItem;
	if (activeItem == null) {
		return;
	}
	*/
} //}}}

function getPathToEasingFolder()
{ // {{{
	// much simpler, thanks Jeff
	var folderObj = new Folder((new File($.fileName)).path + "/" + EASING_FOLDER);
	return folderObj;

} // }}}

function createPalette(thisObj)
{//{{{
	var LIST_DIMENSIONS = [0, 0, 120, 15];
	var STATIC_TEXT_DIMENSIONS = [0, 0, 60, 15];

	palette = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Easing", undefined, {resizeable: true});
	palette.margins       = 6;
	palette.alignChildren = 'left';
	
	// fix the text display in the popup menu - thanks Jeff Almasol
	var winGfx          = palette.graphics;
	var darkColorBrush  = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0,0,0], 1);
	var lightColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [1,1,1], 1);

	// popup menus
	{ // {{{

		// "easing" menu

		var easingGrp            = palette.add('group', undefined, 'Easing group');
		easingGrp.add('statictext', STATIC_TEXT_DIMENSIONS, 'Easing:');

		easingList                          = easingGrp.add('dropdownlist', LIST_DIMENSIONS, easingTypesAry);
		easingList.helpTip                  = "Choose the type of easing here. They're arranged from most dramatic (expo) to least dramatic (sine), with “special effects” (back, bounce, elastic) at the end.";
		easingList.selection                = 'expo';
		easingList.graphics.foregroundColor = darkColorBrush;



		// "type" menu

		var typeGrp            = palette.add('group', undefined, 'Type group'); 
		typeGrp.add('statictext', STATIC_TEXT_DIMENSIONS, 'Type:');

		typeList                          = typeGrp.add('dropdownlist', LIST_DIMENSIONS, getHashValues(inOutLookup));
		typeList.selection                = 'In + Out';
		typeList.helpTip                  = "Whether the values ease in, out, or both.";
		typeList.graphics.foregroundColor = darkColorBrush;




		// "keys" menu

		var keysGrp = palette.add('group', undefined, 'Keys group');
		keysGrp.add('statictext', STATIC_TEXT_DIMENSIONS, 'Keys:');

				keysList                          = keysGrp.add('dropdownlist', LIST_DIMENSIONS, getHashValues(keysLookup));
				keysList.graphics.foregroundColor = darkColorBrush;
				keysList.helpTip                  = "When there’s more than two keyframes, this affects whether it eases ALL of the keyframes (the default), the first and last two, or only the first two. Other keyframes will behave as usual.";
				keysList.selection                = getHashValues(keysLookup)[0]; // select the first item

	} // }}}

	// curvaceous checkbox
	var curvaceousGrp          = palette.add('group', undefined, 'Curvaceous group');
	curvaceousCheckbox         = palette.add('checkbox', undefined, 'Curvaceous');
	curvaceousCheckbox.helpTip = "Turn this on if you’re easing a mask shape or shape path. Note that due to the way it works, Curvaceous automatically disables the “special” easing types, back, bounce, and elastic.";

	curvaceousCheckbox.value = false;

	// update the panel
	curvaceousCheckbox.onClick = function()
	{ // {{{
		if (this.value)
		{
			// it was off, remove
			easingList.remove("Elastic");
			easingList.remove("Back");

			keysList.remove("Start only");
		}
		else
		{ 
			// it was on, add the missing items
			easingList.add("item", "Elastic");
			easingList.add("item", "Back");

			keysList.add("item", "Start only");
		}

		//var items = easingList.items[2];
	} // }}}


	// apply button
	{ // {{{

		var buttonGrp = palette.add('group', undefined, 'Button group');
		buttonGrp.add('statictext', STATIC_TEXT_DIMENSIONS, '');

		// standard buttons
		if (CLEAR_EXPRESSION_BTN)
		{
			var clearExpressionsBtn     = buttonGrp.add('button', undefined, 'Clear expressions');
			clearExpressionsBtn.onClick = clearExpressions;
		}

		////////////////////	
		// apply button
		////////////////////	

		var applyBtn     = buttonGrp.add('button', undefined, 'Apply');
		applyBtn.onClick = applyExpressions;

	} // }}}

	if (palette instanceof Window)
	{
		palette.show();
	}
	else
	{
		palette.layout.layout(true);
	}

}//}}}

function trace(s) { // for debugging
//{{{
	//$.writeln(s); // writes to the ExtendScript interface
	writeLn(s); // writes in the AE info window
} //}}}

function readFile(filename)
{ //{{{
	var easing_folder = getPathToEasingFolder();
	var file_handle   = new File(easing_folder.fsName + '/' + filename);

	if (!file_handle.exists) {
		throw("I can't find this file: '" + filename + "'. \n\nI looked in here: '" + easing_folder.fsName + "'. \n\nYou can try reinstalling, or run the script again to choose the easingExpressions folder.");
		return;
	}

	try 
	{

		file_handle.open('r');
		var the_code = file_handle.read();
	}
	catch(e) 
	{
		throw("I couldn't read the easing equation file: " + e);
		return;
	}
	finally
	{
		file_handle.close();
	}

	return(the_code);
} //}}}

function applyExpressions() { // decide what external file to load
 // {{{
	
	
	if (!canProceed()) { return false }

	app.beginUndoGroup("Ease and Wizz");


	// defaults
	var easingType              = 'inOut';
	var easeandwizzOrCurvaceous = "-easeandwizz";
	var keyframesToAffect       = "-allKeys";

	// loop through the two menu objects and see what the user's selected
	
	// easeAndWizz, or curvaceous?
	if (curvaceousCheckbox.value) easeandwizzOrCurvaceous = "-curvaceous";

	// which keys should be affected?
	for ( i in keysLookup ) 
	{
		if (keysLookup[i] == keysList.selection.toString())
		{
			keyframesToAffect = i;
		}
	}

	// then, should the expression be In, Out, or Both?
	for ( i in inOutLookup ) 
	{
		if (inOutLookup[i] == typeList.selection.toString()) {
			easingType = i;
		}
	}
	
	var curveType = easingList.selection.toString();
	var fileToLoad = "";

	// very hacky, sorry
	if (curveType == "AE Expo") {
		curveType = "aeExpo";
		fileToLoad = curveType + ".js";
	} else {
		fileToLoad = easingType + curveType + easeandwizzOrCurvaceous + keyframesToAffect + '.js';
	}

	try {
		easingEquation = readFile(fileToLoad);
	} catch(e) {
		// debugger;
		
		Window.alert(e);
		return false;
	}

	//Window.alert(fileToLoad);
	setPropsWizz(easingEquation);

	
	app.endUndoGroup();
	
} // }}}

function clearExpressions()
{//{{{
	// TODO : "Object is invalid"
	// TODO : "null is not an object"
	selectedProperties = activeItem.selectedProperties;
	for (var f in selectedProperties)
	{
		var currentProperty = selectedProperties[f];
		if (!currentProperty.canSetExpression) { continue }
		currentProperty.expression = '';
	}
}//}}}

function setPropsWizz(expressionCode)
// used to be just "setProps" - but that conflicted with Expression Toolbox, hence the "wizz" suffix
{ //{{{
	var selectedProperties = app.project.activeItem.selectedProperties;

	for (var f in selectedProperties)
	{
		var currentProperty = selectedProperties[f];

		if (!currentProperty.canSetExpression) { continue } // don't do anything if we can't set an expression
		if (currentProperty.numKeys < 2) { continue } // likewise if there aren't at least two keyframes
		
		
		currentProperty.expression = expressionCode;
	}
} //}}}

function canProceed() 
{ // {{{
	activeItem = app.project.activeItem;
	if (activeItem == null)
	{
		Window.alert("Select a keyframe or two.");
		return false;
	}

	return true;
} // }}}

main(this);
