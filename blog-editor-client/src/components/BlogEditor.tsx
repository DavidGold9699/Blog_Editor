import React, { useRef } from 'react';

import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';

const BlogEditor = (props: any) => {
    const emailEditorRef = useRef<EditorRef>(null);

    const sampleDesign = {"counters":{"u_column":1,"u_row":1},"body":{"id":"m_PiCiHvtM","rows":[{"id":"bce1A_yl1c","cells":[1],"columns":[{"id":"L31CneiUmf","contents":[],"values":{"backgroundColor":"","padding":"0px","border":{},"borderRadius":"0px","_meta":{"htmlID":"u_column_1","htmlClassNames":"u_column"}}}],"values":{"displayCondition":null,"columns":false,"_styleGuide":null,"backgroundColor":"","columnsBackgroundColor":"","backgroundImage":{"url":"","fullWidth":true,"repeat":"no-repeat","size":"custom","position":"center","customPosition":["50%","50%"]},"padding":"0px","anchor":"","hideDesktop":false,"_meta":{"htmlID":"u_row_1","htmlClassNames":"u_row"},"selectable":true,"draggable":true,"duplicatable":true,"deletable":true,"hideable":true}}],"headers":[],"footers":[],"values":{"_styleGuide":null,"popupPosition":"center","popupWidth":"600px","popupHeight":"auto","borderRadius":"10px","contentAlign":"left","contentVerticalAlign":"center","contentWidth":896,"fontFamily":{"label":"Arial","value":"arial,helvetica,sans-serif"},"textColor":"#ffffff","popupBackgroundColor":"#FFFFFF","popupBackgroundImage":{"url":"","fullWidth":true,"repeat":"no-repeat","size":"cover","position":"center"},"popupOverlay_backgroundColor":"rgba(0, 0, 0, 0.1)","popupCloseButton_position":"top-right","popupCloseButton_backgroundColor":"#DDDDDD","popupCloseButton_iconColor":"#000000","popupCloseButton_borderRadius":"0px","popupCloseButton_margin":"0px","popupCloseButton_action":{"name":"close_popup","attrs":{"onClick":"document.querySelector('.u-popup-container').style.display = 'none';"}},"language":{},"backgroundColor":"#000000","preheaderText":"","linkStyle":{"body":true,"linkColor":"#0000ee","linkHoverColor":"#0000ee","linkUnderline":true,"linkHoverUnderline":true},"backgroundImage":{"url":"","fullWidth":true,"repeat":"no-repeat","size":"custom","position":"center"},"_meta":{"htmlID":"u_body","htmlClassNames":"u_body"}}},"schemaVersion":17};

    const exportHtml = () => {
        const unlayer = emailEditorRef.current?.editor;

        unlayer?.exportHtml((data: any) => {
            const { design, html } = data;
            console.log('design', JSON.stringify(design))
            props.onExport(JSON.stringify({
                design: design,
                html: html
            }));
        });
    };

    const onDesignLoad = (data) => {
        console.log('onDesignLoad', data);
    };

    const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
        console.log('onLoad');
        unlayer.addEventListener('design:loaded', onDesignLoad);
        if (props.templateDesign) {
            unlayer.loadDesign(props.templateDesign);
        } else {
            unlayer.loadDesign(sampleDesign)
        }
    };

    const onReady: EmailEditorProps['onReady'] = () => {
        props?.onReady();
    };

    return (
        <div>
            <EmailEditor
                ref={emailEditorRef}
                onLoad={onLoad}
                onReady={onReady}
                minHeight={'calc(100vh - 104px)'}
            />
            <div>
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={exportHtml}>Confirm</button>
            </div>
        </div>
    );
};

export default BlogEditor;