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
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'controller name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{name}}.js',
        templateFile: 'plop-templates/controller.hbs'
      }
    ]
  })
}
