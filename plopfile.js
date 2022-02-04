export default function (plop) {
  // create your generators here
  plop.setGenerator('basics', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name of the component'
      }
    ], // array of inquirer prompts
    actions: [] // array of actions
  })
  plop.setGenerator('readme', {
    description: 'create a readme',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Readme name please'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Readme description please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{constantCase name}}.md',
        templateFile: 'plop-templates/readme.hbs'
      }
    ]
  })
}
