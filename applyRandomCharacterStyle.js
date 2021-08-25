// Script by Ivan Matveev @dmtrvk.ru
// Thanks to http://kasyan.ho.ua/tips/indesign_script/code_samples/how_to_reference_style_inside_groups/how_to_reference_style_inside_groups.html for saving my time



var doc = app.activeDocument;
var styleGroup = doc.characterStyleGroups.item("Random Characters"); // Change the character group here as you wish
if (!styleGroup.isValid) ErrorExit("Character style group\"Random Characters\" doesn't exist.", true);


if (! app.selection[0]){
  exit();
}


if (app.selection[0].characters.length < 1){
  for (i=0; i<app.selection[0].paragraphs[0].characters.length; i++){
    doc.selection[0].paragraphs[0].characters[i].appliedCharacterStyle = styleGroup.characterStyles.anyItem();
  }
} 
  else {
  for (i=0; i<app.selection[0].characters.length; i++){
    doc.selection[0].characters[i].appliedCharacterStyle = styleGroup.characterStyles.anyItem();
  }
}