const express = require("express"); // เรียกใช้ express สำหรับสร้าง web server
const dotenv = require("dotenv"); // เรียกใช้ dotenv เพื่อโหลด environment variables จากไฟล์ .env
const app = express();
dotenv.config(); // โหลดค่าตัวแปรจากไฟล์ .env เข้าสู่ process.env
const cors = require("cors");
const PORT = process.env.PORT || 3000; // กำหนด port ที่จะใช้รัน server
const route = require("./router/route");
app.use(
  cors({
    origin: ["http://localhost:5173", "127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json()); // Middleware สำหรับแปลง request body เป็น json
app.use(express.urlencoded({ extended: true })); // Middleware สำหรับแปลง urlencoded เป็น json

app.use("/api/hello", route);

app.get("/", (req, res) => {
  // route หลัก (root) สำหรับเช็คว่า server ทำงาน
  res.send("Restful API"); // ส่งข้อความกลับ
});

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT); // log เมื่อ server ทำงาน
});
