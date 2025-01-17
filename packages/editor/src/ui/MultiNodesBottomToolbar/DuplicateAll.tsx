import { IconButton, Tooltip } from '@material-ui/core';
import React from 'react';
import {
  useAllFocusedNodeIds,
  useDuplicateMultipleCells,
  useUiTranslator,
} from '../../core/components/hooks';
import Icon from '@material-ui/icons/FileCopy';

const DuplicateAll: React.FC = () => {
  const duplicate = useDuplicateMultipleCells();
  const { t } = useUiTranslator();
  const nodeIds = useAllFocusedNodeIds();
  return (
    <Tooltip title={t('Duplicate al') ?? ''}>
      <IconButton
        onClick={() => duplicate(nodeIds)}
        aria-label="delete"
        color="default"
      >
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default DuplicateAll;
