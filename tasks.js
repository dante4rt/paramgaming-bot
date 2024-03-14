const axios = require('axios');
const { Spinner } = require('./spinner');

async function getTasks(accessToken) {
  const spinner = new Spinner();
  try {
    spinner.start();

    const { data } = await axios({
      method: 'POST',
      url: 'https://paramgaming.com/api/v1/user/getUserTasks',
      headers: {
        Authorization: accessToken,
      },
    });

    spinner.stop();
    console.log('\nTasks fetched successfully.'.green);

    const incompleteTasks = data.data.filter(
      (task) => !task.taskCompleted && !task.taskClaimed
    );
    const incompleteTaskIds = incompleteTasks.map((task) => task.taskId);

    console.log(
      'Incomplete Task IDs:'.cyan,
      incompleteTaskIds.length > 0 ? incompleteTaskIds.join(', ') : 0
    );

    for (const taskId of incompleteTaskIds) {
      try {
        await clearTask(taskId, accessToken);
        await claimTask(taskId, accessToken);
      } catch (error) {
        console.log(
          `Error handling task with ID ${taskId}:`.red,
          error.message
        );
      }
    }

    console.log('All tasks processed successfully.'.green);
  } catch (error) {
    spinner.stop();
    console.log('\nError:'.red, error);
  }
}

async function clearTask(taskId, accessToken) {
  try {
    await axios.post(
      'https://paramgaming.com/api/v1/user/executeTask',
      { taskId },
      { headers: { Authorization: accessToken } }
    );
    console.log('Clear task success for task ID:'.green, taskId);
  } catch (error) {
    console.log(`Error clearing task ${taskId}:`.red, error.message);
  }
}

async function claimTask(taskId, accessToken) {
  try {
    await axios.post(
      'https://paramgaming.com/api/v1/user/claimTaskRewards',
      { taskId },
      { headers: { Authorization: accessToken } }
    );
    console.log('Claim task success for task ID:'.green, taskId);
  } catch (error) {
    console.log(
      `Error claiming task rewards for task ID ${taskId}:`.red,
      error.message
    );
  }
}

module.exports = { getTasks, clearTask, claimTask };
