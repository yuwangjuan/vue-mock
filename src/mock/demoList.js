let demoList = {
  status: 200,
  message: 'success',
  data: {
    total: 100,
    'rows|10': [{
      id: '@id',
      name: '@cname',
      address: '@city',
      'age|20-30': 29,
      'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
    }]
  }
};
export default {
  'get|/parameter/query': demoList
}
