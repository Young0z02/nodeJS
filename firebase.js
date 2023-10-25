var admin = require("firebase-admin");

var serviceAccount = require("./path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://connection-fa6ff-default-rtdb.firebaseio.com"
});


const db = admin.database();

// prescription 테이블에 데이터 추가
const prescriptionRef = db.ref('prescription');
const newPrescriptionRef = prescriptionRef.push();
newPrescriptionRef.set({
  prescriptionNo: '새로운 처방전 교부번호 값',
  hospitalName: '새로운 병원명칭 값'
});

// medicine 테이블에 데이터 추가
const medicineRef = db.ref('medicine');
const newMedicineRef = medicineRef.push();
newMedicineRef.set({
  prescriptionNo: '새로운 처방전 교부번호 값',
  medicineNo: '새로운 약 번호 값',
  medicineName: '새로운 약 명칭 값',
  daysC: '새로운 일수 값',
  daysNo: '새로운 횟수 값',
  daysTotal: '새로운 총횟수 값',
  daysVolume: '새로운 용량 값'
});

// medicationP 테이블에 데이터 추가
const medicationPRef = db.ref('medicationP');
const newMedicationPRef = medicationPRef.push();
newMedicationPRef.set({
  medicineNo: '새로운 약 번호 값',
  daysC: '새로운 일수 값',
  daysNo: '새로운 횟수 값',
  daysTotal: '새로운 총횟수 값',
  medicationNo: '새로운 복약기 번호 값',
  startD: '새로운 시작일 값'
});

// notificationI 테이블에 데이터 추가
const notificationIRef = db.ref('notificationI');
const newNotificationIRef = notificationIRef.push();
newNotificationIRef.set({
  autoNo: '새로운 자동번호 값',
  medicationNo: '새로운 복약기 번호 값',
  date: '새로운 일시 값',
  time: '새로운 알림 시각 값',
  notificationC: '새로운 알림 횟수 값',
  medicationT: '새로운 복약 시기 값',
  repatternT: '새로운 재알람 패턴 시간 값'
});

// timeing 테이블에 데이터 추가
const timeingRef = db.ref('timeing');
const newTimeingRef = timeingRef.push();
newTimeingRef.set({
  time: '새로운 알림 시각 값',
  medicationT: '새로운 복약 시기 값'
});

// sideeffectP 테이블에 데이터 추가
const sideeffectPRef = db.ref('sideeffectP');
const newSideeffectPRef = sideeffectPRef.push();
newSideeffectPRef.set({
  medicationNo: '새로운 복약기 번호 값',
  medicationT: '새로운 복약시기 값'
});

// medication 테이블에 데이터 추가
const medicationRef = db.ref('medication');
const newMedicationRef = medicationRef.push();
newMedicationRef.set({
  medicationNo: '새로운 복약기 번호 값',
  medicationYn: '새로운 복약 여부 값',
  activate: '새로운 활성화 여부 값'
});

// sideeffectIn 테이블에 데이터 추가
const sideeffectInRef = db.ref('sideeffectIn');
const newSideeffectInRef = sideeffectInRef.push();
newSideeffectInRef.set({
  medicineNo: '새로운 약 번호 값',
  date: '새로운 날짜 값',
  medicationT: '새로운 복약시기 값',
  sideeffectInfo: '새로운 부작용입력 값'
});
