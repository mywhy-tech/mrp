# mywhy Robot Pilot

### 1. **Backend with Frappe Framework**

The **Frappe Framework** is the backend choice due to its modularity, ease of creating REST APIs, and ability to handle complex business logic. Frappe will serve as:

- **Data Management Layer:** Handling all database interactions, like storing robot status, historical logs, and user profiles.
- **APIs for Robot Control:** Providing endpoints for controlling Spot's movements, configurations, and operational states.
- **Integration Hub:** Connecting with third-party services or tools, such as mapping APIs or cloud storage solutions.
- **Custom Workflows:** Automating processes like routine checks or reporting anomalies in the robot's operation.

---

### 2. **Frontend with React**

React will handle the user-facing side of the application, offering a dynamic and responsive interface.

#### a) **Key Frontend Features**

- **Control Dashboard:**
  - Real-time display of Spot's status (location, battery, task progress, etc.).
  - Manual control options for navigating Spot.
- **Task Management:**
  - Schedule tasks like patrols or inspections.
  - View completed tasks with analytics.
- **Live Video Feed:** Stream from Spot's cameras using WebRTC.
- **Alerts and Notifications:** Show warnings or updates for maintenance or unexpected behavior.

#### b) **State Management**

React can use **Redux** or **Context API** to manage application states efficiently, ensuring smooth interactions and real-time updates from the backend.

#### c) **Real-Time Updates**

Implement WebSockets or MQTT for live communication between Spot and the frontend, enabling features like real-time telemetry.

---

### 3. **Boston Dynamics Robot Spot Integration**

Spot's SDK (available in Python) offers tools to control and communicate with the robot. Key integrations:

#### a) **API Communication**

- Use Frappe to interface with Spot's API, acting as a middleman between Spot and the frontend.
- Send commands for movement (e.g., walking, climbing stairs) and tasks.

#### b) **Data Collection**

Spot's sensors (e.g., cameras, LIDAR, thermal imaging) provide valuable data. This data can:

- Be processed and stored in Frappe.
- Be visualized in React, e.g., on a 3D map or through real-time graphs.

#### c) **Autonomous Operations**

- Define routines or behaviors for Spot in Frappe.
- Enable React to trigger or monitor these routines with user-friendly controls.

---

### 4. **Implementation Example**

#### **Task Flow: Inspecting a Site**

1. **User Input:**
   - User schedules an inspection task via the React frontend.
2. **Backend Processing:**
   - Frappe stores the task in the database and queues it.
   - Frappe communicates with Spot's API to initialize the task.
3. **Spot Execution:**
   - Spot performs the task, sending real-time data back to Frappe.
4. **Frontend Updates:**
   - React displays Spot's progress, along with live feeds and status.

---

### 5. **Installation Instructions**

Since mrp is a Frappe app, it can be installed via frappe-bench on your local machine or on your production site.

Once you have setup your bench and your site, you can install the app via the following commands:

```bash
bench get-app https://github.com/mywhy-tech/mrp.git
```

```bash
bench --site <yoursite.name> install-app mrp
```

Access the application at `http://<yoursite.name>:8000` after starting the server.

---

### License

This project is licensed under the MIT License.
