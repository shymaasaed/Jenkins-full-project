import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',

  thresholds: {
    http_req_failed: ['rate<0.01'],   
    http_req_duration: ['p(95)<1000'], 
    checks: ['rate>0.99'],           
  },
};

export default function () {
  const res = http.get('http://localhost:8090/');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
