import React from "react";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css%22%3E"
/>;

export default function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Services</a>
          </li>
          <li className="list-inline-item">
            <a href="#">About</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <div className="social-icons">
          <a href="" target="_blank">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEUAAAD////Q0NB2dnba2tpAQEBjY2NfX1+oqKj09PQFBQVNTU37+/tYWFjs7OwODg66urogICDh4eEsLCy0tLRHR0fKysozMzOOjo7Dw8NwcHCFhYUaGhqgoKCampqurq7KmDeXAAADrUlEQVRogcXb25aqMAwG4IjCFJSjJ0Td8/5vuanKyKFo/ras5HLWON+ALaRpSis44qBQdZOGZdJGGaZNrYogw/8OgaqKbgmZ4hapIF6Krg7p3qj+xT49VP7pTKXmqx1FkiruvefRQcNhu2gCb/ThiMA6jgcvtMpRWEeunOnCCn7ghRMdbG1hHdvP3/knOr66wDqun2b6B/p0dpWJzicbunaHddQwnYV+ZKJw7hEzQ198wTouCH33KRPd+bSnr/kdxi/cRK99y0RrHg29KrjRcOhFZJM9oRe428+Y3PMx7X2EvWM81ka051k1jPsn2uuTZBqXeTpbVibKZmnb53Z+Ds/7G+MXwznaaohdi17+G2ebz/9+baZPuBtOk6Avec3JRMd4ZnDfTeTdF/ocG2g4G7ptJvB3mq5TOkBlMqYAX2kKJjSce5qumUNvx3SByv+MMoOmYkSjmX5oljl0PqQVKM/lWxya1ICGL3o6rfh03qcPoNybIhY0HXo0vIqdrKZ2u/gZHPr4pp3n9GV9LPNn8P/zBw2nY8fBMm6Xop9vOhp/TUeDa7ZYkGYvGp5ZwxTP4r3zmF+ahu/XkN7gMqVPumJVpeZpfJASJdWDhie1B1pPbbK53x7oVNPxl+rjMvQ+bmmbT7rT7VOFLKaWF1q1dCRDRy3NSd0XoG8rivFZPVos29FJTPwPptWmi0HBPd68o+JnlwHx88HhO2Mm+Mu2gvgDnEMDrxJF/DUeh674g7YmfprAoYEh1xD/Cc6hgbJESvxxwaF/+XRIpVcayJVK4j9ROPQPn0ZWHRwaeAEjT1EODVxK4veGI2l17neYIclpCUyuffTzinSwrt+k3c8jpDQRAo+UXnh4X7ewVfnbB90Arw/PdA28ND3TCkgVPNMFkCB5pgO7tNAD3aaFgsmw5BJAcOEjuNwTXOQKLu0lCxqCZRzX4pUN/SpeuZbsbOiuZIcXKp3prlCJl2dd6b/yLP5hV/pdlIZL8Y50rxQPT21Hur8BgW67uNGDbRd0frnRw80m8LKd6NEWG7ix6ESPNxax7VQXerKdiv0BF3q6iQzt2zjQhq1zaOPGnjY2DCBtEva0sU0CaQ6x3myaaQ4Baqtl2Avgi5ptiZFsBBJsf5Js+pJsdZNs8JNsa5Rs5pRsYZVs3JVsV5Zs0pZsTV8JNuSvJI8hSB6+WAkeOdEhdtBGh9jxIh1ih6p0iB0l0yF2gO4RUscGnzF/WDJZ9LDk238dEc2TJO+OiGLqI/4Dcg8uJsGKg5gAAAAASUVORK5CYII="
              alt="Facebook"
              width="32"
              height="32"
            />
          </a>
          <a href="" target="_blank">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dr8d15NXJOnkuthHEFYPpnUHCrCzJYdTlg&usqp=CAU"
              alt="Twitter"
              width="32"
              height="32"
            />
          </a>
          <a href="https://github.com/Royal-Service" target="_blank">
            <img
              src="data:image/png;base64,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"
              alt="Github"
              width="32"
              height="32"
            />
          </a>
          <a
            href=""
            target="_blank"
          >
            <img
              src="data:image/png;base64,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"
              alt="LinkedIn"
              width="32"
              height="32"
            />
          </a>
        </div>
        <p className="copyright">Royal Service © 2023</p>
      </footer>
    </div>
  );
}
