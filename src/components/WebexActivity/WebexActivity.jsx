import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import {useActivity} from '../hooks';
import {AdapterContext} from '../hooks/contexts';
import WebexAdaptiveCard from '../WebexAdaptiveCard/WebexAdaptiveCard';
import Activity from './Activity';

/**
 * WebexActivity component displays activity content.
 *
 * @param {object} props  Data passed to the component
 * @param {string} props.activityID  ID of the activity
 * @param {string} props.className  Custom CSS class to apply
 * @param {object} props.style  Custom style to apply
 * @returns {object} JSX of the component
 */
export default function WebexActivity({activityID, className, style}) {
  const activity = useActivity(activityID);
  const adapter = useContext(AdapterContext);
  const hasCard = adapter?.activitiesAdapter?.hasAdaptiveCard(activity);

  return (
    <>
      <Activity {...activity} className={className} style={style} isReply={activity.parentID}>
        {hasCard && <WebexAdaptiveCard activityID={activity.ID} />}
      </Activity>
      {activity.replyIDs && activity.replyIDs.map((id) => (
        <WebexActivity activityID={id} />
      ))}
    </>
  );
}

WebexActivity.propTypes = {
  activityID: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.shape(),
};

WebexActivity.defaultProps = {
  className: '',
  style: undefined,
};
