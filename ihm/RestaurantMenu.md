# 🍽️ Restaurant Menu – JavaFX Application  
**TP1 – IHM (Interfaces Homme-Machine)**  
Université d'El Oued – 3ème année Licence Informatique  

---

## 🧠 Project Overview | نظرة عامة على المشروع
This JavaFX application simulates a simple **restaurant menu** where the user can select dishes (Pizza, Burger, Salad, Drink) and calculate the **total price**.  
البرنامج يحاكي قائمة طعام لمطعم، حيث يمكن للمستخدم اختيار الأطباق التي يريدها، ثم حساب المبلغ الإجمالي لطلبه.

---

## 💻 Technologies Used | التقنيات المستعملة
- **Java** (JDK 17+)  
- **JavaFX** (GUI Library)  
- **Scene Builder** *(optional)* for interface design  

---

## 🧩 Features | المزايا
✅ Graphical user interface (GUI) with clear layout  
✅ Multiple item selection using **CheckBoxes**  
✅ Dynamic calculation of total price  
✅ Simple, beginner-friendly, and well-commented code  

---

## 🧱 Code Structure | هيكلة المشروع
TP1_RestaurantMenu/
│
├── RestaurantMenu.java # Main source code
├── README.md # Project description file
└── (optional) resources/ # Folder for images or icons

arduino
Copy code

---

## 🧾 Source Code | الكود المصدري

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class RestaurantMenu extends Application {

    @Override
    public void start(Stage stage) {
        Label title = new Label("🍽️ Welcome to My Restaurant!");

        // Menu items with prices
        CheckBox pizza = new CheckBox("Pizza - 1200 DA");
        CheckBox burger = new CheckBox("Burger - 900 DA");
        CheckBox salad = new CheckBox("Salad - 700 DA");
        CheckBox drink = new CheckBox("Drink - 300 DA");

        Button orderButton = new Button("Calculate Total");
        Label result = new Label();

        orderButton.setOnAction(e -> {
            int total = 0;
            if (pizza.isSelected()) total += 1200;
            if (burger.isSelected()) total += 900;
            if (salad.isSelected()) total += 700;
            if (drink.isSelected()) total += 300;

            result.setText("Total = " + total + " DA");
        });

        VBox root = new VBox(10, title, pizza, burger, salad, drink, orderButton, result);
        root.setStyle("-fx-padding: 20; -fx-alignment: center; -fx-font-size: 14px;");

        Scene scene = new Scene(root, 300, 350);
        stage.setScene(scene);
        stage.setTitle("Restaurant Menu");
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
⚙️ How to Run | كيفية التشغيل
Install JDK 17+ and set the environment variable JAVA_HOME.

Download and install JavaFX SDK, then add its path to your IDE or terminal.

Compile the program:

bash
Copy code
javac --module-path "path/to/javafx/lib" --add-modules javafx.controls RestaurantMenu.java
Run the program:

bash
Copy code
java --module-path "path/to/javafx/lib" --add-modules javafx.controls RestaurantMenu
🖼️ Example Output | مثال من التطبيق
mathematica
Copy code
🍽️ Welcome to My Restaurant!
[ ] Pizza - 1200 DA
[ ] Burger - 900 DA
[ ] Salad - 700 DA
[ ] Drink - 300 DA
[Calculate Total]
Total = ...
🧩 Concepts Practiced | المفاهيم المطبقة
GUI Elements: Label, Button, CheckBox

Layout Management: VBox

Event Handling: setOnAction()

Styling with CSS (setStyle())

💬 Author | صاحب المشروع
👤 [Your Full Name]
📚 3rd Year – Computer Science (Université d'El Oued)
📅 2025
📧 youremail@example.com

🌟 Notes
This project is part of IHM (Interface Homme-Machine) course practical work.
The goal is to understand how to create a simple GUI application using JavaFX and handle user interactions.

🔤 Useful Vocabulary (English–Français–عربي)
English	Français	عربي
Button	Bouton	زر
Label	Étiquette	تسمية / نص
CheckBox	Case à cocher	مربع اختيار
Layout	Disposition	تخطيط
Scene	Scène	مشهد / نافذة داخلية
Stage	Fenêtre	نافذة التطبيق

🧠 Bonus
You can improve this TP later by adding:

Images for each dish 🍕🍔🥗🥤

A reset button 🔁

A delivery option with an extra cost 🚚

Dynamic currency choice (DA / € / $) 💱

yaml
Copy code

---



