export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6158f67d39fa29442076c2eb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-enks2wwv',
                  apiId: '95bb372b-82d4-4bf4-881b-4baa7a731fbe'
                },
                {
                  buildHookId: '6158f67ebb94173aa8d9e40c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-a1swz2kx',
                  apiId: '706414d3-c435-482e-826d-2b7a20bcd98c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stordahl/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-a1swz2kx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
