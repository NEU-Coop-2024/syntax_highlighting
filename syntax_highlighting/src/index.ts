import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

/**
 * Initialization data for the syntax_highlighting extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'syntax_highlighting:plugin',
  description: 'A Jupyter Notebook extension',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension syntax_highlighting is activated!');
  }
};

export default plugin;
