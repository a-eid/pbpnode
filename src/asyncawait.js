// basics of async await with mongoose 

exports.update = async (req, res) => {
  let result
  try {
    result = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true })
  } catch (e) {
    res.status(500).json({ error: err });
  }
  task && res.status(400).json({ error: 'No task with the given ID' }) || res.json({ task: task });
}