const LiEditorManTitle = function(){
    const MainTitle = document.createElement('div');
    MainTitle.classList.add('lieditor-field');
    MainTitle.innerHTML = `<input type="text" placeholder="Write a title" class="lieditor-input-text-h1" name="maintitle">`;
    return MainTitle;
};

const LiEditorTextBlock = function(){
    const LiBlock = document.createElement('div');
    LiBlock.classList.add('lieditor-field');
    LiBlock.innerHTML = `<textarea name="text1" class="lieditor-text-large"></textarea>`;
    return LiBlock;
};

const LiEditorSubmitter = function(){
    const Submitter = document.createElement('div');
    Submitter.classList.add('lieditor-field');
    Submitter.innerHTML = `<input name="lisubmitter" type="submit" class="lieditor-button-subbmit" value="Process">`;
    return Submitter;
};

const LiEditorProcess = function({event, outPut, editor, submitter}) {
    event.preventDefault();
    const formData = new FormData(editor, editor.lisubmitter);

    for (const [key, value] of formData) {
        outPut.innerHTML += `${key}: ${value}\n`;
    }
};

document.addEventListener('DOMContentLoaded', function(){
    const LiEditorOutPut = document.querySelector('#lieditor-output');
    const LiEditorContainer = document.querySelector('.lieditor-container');
    const LieditorSubmitterButton = LiEditorSubmitter();
    const LieditorBlocks = [];
    LiEditorContainer.addEventListener('submit', function(e){
        LiEditorProcess({
            event: e,
            outPut: LiEditorOutPut, 
            editor: LiEditorContainer,
            submitter: LieditorSubmitterButton
        });
    });
    LiEditorContainer.appendChild(LiEditorManTitle());
    LiEditorContainer.appendChild(LiEditorTextBlock());
    LiEditorContainer.appendChild(LieditorSubmitterButton);
    
});