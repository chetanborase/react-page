import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import {
  useAllFocusedNodeIds,
  useRemoveMultipleNodeIds,
  useUiTranslator,
} from '../../core/components/hooks';

const DeleteAll: React.FC = () => {
  const remove = useRemoveMultipleNodeIds();
  const focused = useAllFocusedNodeIds();
  const { t } = useUiTranslator();
  return (
    <Tooltip title={t('Remove all selected') ?? ''}>
      <IconButton
        onClick={() => remove(focused)}
        aria-label="delete"
        color="secondary"
      >
        <Delete />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteAll;
