import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { Hypl } from 'hypl_syntax';
import { INotebookTracker, NotebookPanel } from '@jupyterlab/notebook';
//import { EditorState, EditorView } from '@codemirror/basic-setup';
//import { CodeMirrorEditor } from '@jupyterlab/codemirror';
import { EditorView, basicSetup } from 'codemirror';
//import { CodeEditor } from '@jupyterlab/codeeditor';
//import { EditorAdapter, ILSPDocumentConnectionManager, ILSPFeatureManager, IWidgetLSPAdapterTracker } from '@jupyterlab/lsp';
//import { EditorExtensionRegistry } from '@jupyterlab/codemirror';


/**
 * Initialization data for the myextension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'myextension:plugin',
  description: 'A JupyterLab extension for Hypl syntax highlighting.',
  autoStart: true,
  requires: [INotebookTracker],
  activate: (app: JupyterFrontEnd, tracker: INotebookTracker) => {
    console.log('JupyterLab extension myextension is activated!');
    console.log(Hypl);

    // Function to apply syntax highlighting to all cells
    const applySyntaxHighlighting = (panel: NotebookPanel) => {
      panel.content.widgets.forEach((cell) => {

        if (cell.editor) {
          console.log("first cell editor", cell.editor);
        } else {
          console.log("Editor not initialized yet.");
          cell.ready.then(() => {
            console.log("Editor initialized:", cell.editor);
            console.log(cell.editor?.host);
            const view = new EditorView({
              doc: cell.editor?.model.sharedModel.source,
              extensions: [basicSetup, Hypl()],
              parent: cell.editor?.host
            });
            console.log(view);


          });
        }

      });
    };

    // Apply syntax highlighting to a specific cell (e.g., the first cell, index 0)
    tracker.forEach(panel => applySyntaxHighlighting(panel));

    // Optionally, listen for new notebooks added to the tracker
    tracker.widgetAdded.connect((sender: INotebookTracker, panel: NotebookPanel) => {
      applySyntaxHighlighting(panel); // Apply to the first cell of the new notebook
    });
  }
};

export default plugin;



