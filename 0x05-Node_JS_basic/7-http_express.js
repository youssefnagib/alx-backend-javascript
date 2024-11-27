const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const path = process.argv[2] || '';

function countStudents() {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      reject(new Error('Cannot load the database'));
    }
    if (!fs.statSync(path).isFile()) {
      reject(new Error('Cannot load the database'));
    }
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      const lines = data.trim().split('\n');
      const studentDistribution = {};
      const fieldNames = lines[0].split(',');
      const studentPropertyNames = fieldNames.slice(0, fieldNames.length - 1);

      for (const line of lines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentDistribution).includes(field)) {
          studentDistribution[field] = [];
        }
        const studentEntries = studentPropertyNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentDistribution[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object
        .values(studentDistribution)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      const ret = [];
      ret.push(`Number of students: ${totalStudents}\n`);

      for (const [field, specialization] of Object.entries(studentDistribution)) {
        const studentNames = specialization.map((student) => student.firstname).join(', ');
        ret.push(`Number of students in ${field}: ${specialization.length}. List: ${studentNames}\n`);
      }
      resolve(ret);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let sent = ['This is the list of our students\n'];
  countStudents().then((val) => {
    sent = sent.concat(val);
  }).catch((err) => {
    const message = err instanceof Error ? err.message : err.toString();
    sent.push(message);
  }).finally(() => { res.send(sent.join('')); });
});

app.listen(port, () => {
});

module.exports = app;
