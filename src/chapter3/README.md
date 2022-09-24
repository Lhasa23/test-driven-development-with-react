# Task Process Tracing

description:

- d means half a day of development; D means a whole day of development

- q means half a day of quality assurance; Q means a whole day of quality assurance

- b means half a day of blocked; B means a whole day of blocked

purpose:

input string like 'dDqbD'; parse to readable json object:

```json
{
  "Dev": 2.5,
  "QA": 0.5,
  "Blocked": 0.5
}
```


