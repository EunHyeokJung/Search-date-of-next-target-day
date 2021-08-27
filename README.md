##Search date of next target day

이 함수는 함수 실행일을 기준으로 요구하는 요일의 다음 날짜를 YYYYMMDD 형식으로 반환합니다.
This function returns the date(YYYYMMDD) of next target day.

---

 * 타겟으로 정한 요일을 해당 날짜를 기준으로 다음으로 가장 빠른 날짜를 YYYYMMDD형으로 반환합니다.
 * 수요일에 "월"을 인자로 요청할 경우, 다음주 월요일 날짜를 반환합니다.
 * 수요일에 "수"를 인자로 요청할 경우, 당일 날짜를 반환합니다.
 * 수요일에 "금"을 인자로 요청할 경우, 이번주 금요일 날짜를 반환합니다.

 * Returns the next earliest date in YYYYMMDD format based on the target day of the week.
 * If you request "monday" as an argument on Wednesday, it returns the date of next Monday.
 * If you request "Wednesday" as an argument on Wednesday, it returns the date of day.
 * If you request "Friday" as an argument on Wednesday, it returns the date of this friday.

---

|변수명|타입|변수설명|도메인|
|---|------|--------------|-------------------------|
|day|STRING|타깃으로 하는 요일 (한글자)|"일", "월", "화", "수", "목", "금", "토"|


|PARMS|TYPE|DES|DOMAIN|
|---|------|--------------|-------------------------|
|day|STRING|Target day of the week|"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"|

---

예시
EXAMPLES

|함수실행일|입력값|출력값|
|--------|---|-------|
|20210825(수)|"월"|20210830|
|20210825(수)|"수"|20210825|
|20210825(수)|"금"|20210827|


|DATE|INPUT|OUTPUT|
|--------|---|-------|
|20210825(Wed)|"Mon"|20210830|
|20210825(Wed)|"Wed"|20210825|
|20210825(Wed)|"Fri"|20210827|

MIT LICENCE (c) EunHyeokJung
