# Test Cases

## TC-01 Energy selection

Action:

Select Low.

Expected result:

Low becomes visually active and low-energy activities are displayed.

## TC-02 Change energy selection

Action:

Select Low and then select High.

Expected result:

High becomes active, Low becomes inactive and high-energy activities are displayed.

## TC-03 Complete activity

Action:

Select an energy level and click one suggested activity.

Expected result:

The activity is marked as completed.

## TC-04 Change completed activity

Action:

Complete one activity and then click another activity.

Expected result:

The new activity becomes the current completed activity.

## TC-05 Create history entry

Action:

Complete an activity.

Expected result:

A new history entry appears with the activity, energy level and date.

## TC-06 History persistence

Action:

Complete an activity and refresh the page.

Expected result:

The history entry remains visible after the refresh.

## TC-07 Empty history

Action:

Open the application in a browser with no saved Daily Reset data.

Expected result:

The application displays the message that there are no completed activities yet.

## TC-08 Energy change reset

Action:

Complete an activity and then choose another energy level.

Expected result:

The current completion highlight is cleared and new suggestions are displayed.