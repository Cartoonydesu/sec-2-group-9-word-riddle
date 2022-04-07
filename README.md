## sec-2-group-9-word-riddle

## 🎎Project นี้เกี่ยวกับเกมส์คำศัพท์แสนสนุก

### 📌วัตถุประสงค์ ของการทำ project นี้
1. เพื่อทบทวนคำสั่ง syntax ต่าง ๆ ที่ได้เรียนในรายวิชา INT203 Clent-Side Web Programming II
2. เพื่อเรียนรู้การทำงานเป็นกลุ่ม แบ่งปันความคิดเห็นและความรู้ 
3. เพื่อให้รู้สึกสนุกไปกับการเรียน โดยเลือกโปรเจกที่คล้ายเกมเพื่อให้รู้สึกอยากทำ รวมถึงเป็นหัวข้อที่ทุกคนในกลุ่มร่วมกันเลือกและออกแบบ

### 📎เนื้อหาที่ใช้
1. Javascript พื้นฐาน เช่น การสร้างตัวแปร function การ import, export etc.
2. การใช้คำสั่ง vue ต่าง ๆ เช่น v-text, v-bind, v-on etc.
3. การใช้ defineProps เพื่อสร้าง component
4. การใช้ defineEmits โดยใช้ร่วมกับ v-on เพื่อการทำงานข้าม component
5. การใช้ DB ผ่าน JSON server และสามารถทำงานได้ตั้งแต่ create, update, delete, create
6. การใช้ router เพื่อสร้าง path และประวัติการค้นหาไปหน้าเว็บต่าง ๆ
7. การใช้ pinia เพื่อส่งข้อมูล / function ข้าม component 2 file ต่างๆ

### 📖คำอธิบายเกม
**Hangman** : เกมส์ Hangman เป็นเกมส์ทายคำศัพท์่ง่าย ๆ สุดคลาสิก เป็นเกมส์เดาอักษร เมื่อผิดจนชีวิตหมดก้จะแพ้
**Scrabble word** : เกมส์ Scrabble word เป็นเกมส์ฝึกคำศัพท์ มักนำมาใช้เป็นแบบฝึกหัด เป็นเกมส์ที่ตัวอักษรสลับที่กัน และต้องเดาคำให้ถูก

### 💡วิธีการเล่น
1. เมื่อเข้ามา จะแสดงหน้า Home สามารถคลิ๊กลิงค์ เพื่อไปหน้าอื่น ๆ ได้ **(path: /)**

2. คลิ๊ก Vocab เพื่อแสดงหน้า vocabulary **(path: /vocab)**
  - **GET** สามารถดูคำศัพท์ที่แสดงผลในรูปแบบของตารางได้ทั้ง word (คำศัพท์) และ hint (คำใบ้) และสามารถ search คำศัพท์ได้
  -. **DELETE** สามารถลบคำศัพท์ได้ โดยการกดปุ่ม Delete ในแต่ละ row
  - **POST** สามารถทำการเพิ่มคำศัพท์ได้โดยการกรอก word และ hint คำศัพท์นั้นจะถูกเพิ่มในส่วนของ backend
  - **PUT** สามารถแก้ไขคำศัพท์ได้โดยการกด edit 

3. คลิ๊ก About me เพื่อดูข้อมูลเกี่ยวกับกลุ่มของพวกเราค่ะ ! **(path: /about-us)**

4. คลิ๊ก Hang man ในหน้า Home เพื่อเล่นเกมส์ Hangman **(path: /hang-man)**
  - หน้าจอจะแสดงผล _ ตามความยาวของคำนับตามตัวอักษร แสดงผลจุดแขวนคอเปล่า ๆ ไว้ แสดงผลปุ่มตัวอักษรภาษาอังกฤษ และแสดงผลปุ่ม reset เพื่อ reset หน้าจอ และเปลี่ยนคำใหม่
  - ผู้เล่นทำการเดาตัวอักษร เลือกโดยการคลิ๊กปุ่มที่ปรากฎ โดย
    = ถ้าตัวอักษรมีอยู่จริงในคำศัพท์ ตัวอักษรนั้นจะไปแสดงผลแทนที่ _ และค่าชีวิตจะไม่ลด
    = ถ้าตัวอักษรไม่มีจริงในคำศัทพ์ ค่าชีวิตจะลดลง และภาพ Hangman จะเริ่มปรากฎ
  - ตอนเริ่มต้น ผู้เล่นจะมีทั้งหมด 10 ชีวิต (หมายความว่า ผิดได้ 10 ครั้ง) เมื่อค่าชีวิตเหลือ 5 ปุ่ม Hint จะปรากฎ ผู้เล่นสามารถคลิ๊กเพื่อเปิดดูคำใบ้ได้
  - หากชีวิตหมด จะแสดงผล Game Over และเฉลยคำตอบ
  - หากตอบถูกจะแสดงข้อความ You Win และปุ่มตัวอักษรจะกดไม่ได้อีก 

5. คลิ๊ก Scrabble word ในหน้า Home เพื่อเล่นเกมส์ Scrabble word **(path: /scrabble-word')**
  - หน้าจอแสดงผลคำศัพท์ โดยที่ตัวอักษรสลับที่กัน แสดงผล box สำหรับ input ข้อมูล และปุ่ม reset เพื่อ reset หน้าจอ และเปลี่ยนคำใหม่
  - ผู้เล่นเดาคำจากตัวอักษรที่กำหนดให้แล้วพิมพ์คำตอบลงในกล่อง input
  - ผู้เล่นสามารถเปิดคำใบ้ได้โดยการกดปุ่ม Hint
  - หากถูกจะแสดงผล You Win

## 🎎สมาชิกกลุ่ม
1. 63130500075 ปณาลี   ปาลศรี
2. 63130500084 พรธิชา   แสงมณี
3. 63130500087 พิรญาณ์  สุทธิปริญญานนท์
4. 63130500106 วิชชุตา   พิภพภิญโญ
