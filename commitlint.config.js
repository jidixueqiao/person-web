module.exports = {
  extends: ['@commitlint/config-angular'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  },
  rules: {
    'type-case': [0],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        '📦build',
        '👷ci',
        '📝docs',
        '🌟feat',
        '🐛fix',
        '🚀perf',
        '🌠refactor',
        '🔂revert',
        '💎style',
        '🚨test'
      ]
    ],
    // 'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never']
  },
  prompt: {
    settings: {},
    skip: ['body', 'footer', 'issues', 'scope'],
    messages: {
      skip: '回车直接跳过',
      max: '最大%d字符',
      min: '%d chars at least',
      emptyWarning: '内容不能为空，重新输入',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit'
    },
    questions: {
      type: {
        description: '请选择提交类型',
        enum: {
          '🌟feat': {
            description: '增加新功能',
            title: 'Features',
            emoji: '🌟'
          },
          '🐛fix': {
            description: '修复bug',
            title: 'Bug Fixes',
            emoji: '🐛'
          },
          '📝docs': {
            description: '修改文档',
            title: 'Documentation',
            emoji: '📝'
          },
          '💎style': {
            description: '样式修改不影响逻辑',
            title: 'Styles',
            emoji: '💎'
          },
          '🌠refactor': {
            description: '功能/代码重构',
            title: 'Code Refactoring',
            emoji: '🌠'
          },
          '🚀perf': {
            description: '性能优化',
            title: 'Performance Improvements',
            emoji: '🚀'
          },
          '🚨test': {
            description: '增删测试',
            title: 'Tests',
            emoji: '🚨'
          },
          '📦build': {
            description: '打包',
            title: '打包',
            emoji: '📦'
          },
          '👷ci': {
            description: 'CI部署',
            title: 'Continuous Integrations',
            emoji: '⚙️'
          },

          '🔂revert': {
            description: '版本回退',
            title: 'Reverts',
            emoji: '🔂'
          }
        }
      },
      scope: {
        description: '请输入修改的范围（可选）'
      },
      subject: {
        description: '请简要描述提交（必填）'
      },
      body: {
        description: '请输入详细描述（可选）'
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself'
      },
      issues: {
        description: '请输入问题说明'
      }
    }
  }
}
