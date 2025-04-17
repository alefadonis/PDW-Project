import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./QRCodeForm.css";

const QRCodeForm: React.FC = () => {
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [classId, setClassId] = useState<string>("turma1");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const professorId = "abc123";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      (err) => {
        console.error("Erro ao pegar localização", err);
      }
    );
  }, []);

  const qrUrl =
    lat && lng && selectedDate
      ? `https://your-app.com/attendance?classId=${classId}&professorId=${professorId}&lat=${lat}&lng=${lng}&date=${selectedDate}`
      : "";

  return (
    <div className="user-form-container">
      <div className="form-section">
        <div className="form-group">
          <label className="form-label">Turmas</label>
          <select
            className="dropdown"
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
          >
            <option value="turma1">Turma 1</option>
            <option value="turma2">Turma 2</option>
            <option value="turma3">Turma 3</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Data da Presença</label>
          <input
            type="date"
            className="input-box"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>

      <div className="frame">
        {lat && lng && selectedDate ? (
          <QRCodeCanvas
            value={qrUrl}
            size={280}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
          />
        ) : (
          <p style={{ color: "white" }}>Aguardando informações...</p>
        )}
      </div>

      <div className="add-now-wrapper">
        <button className="add-now-button">Add Now</button>
      </div>
    </div>
  );
};

export default QRCodeForm;
