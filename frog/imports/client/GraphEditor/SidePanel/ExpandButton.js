// @flow
import * as React from 'react';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';

import { connect } from '../store';

export default connect(
  ({
    store: {
      ui: { sidepanelOpen, setSidepanelOpen }
    }
  }) => (
    <Tooltip id="tooltip-top" title="show the activity menu" placement="top">
      <Switch
        checked={sidepanelOpen}
        onChange={() => setSidepanelOpen(!sidepanelOpen)}
        aria-label="showSidePanel"
      />
    </Tooltip>
  )
);
