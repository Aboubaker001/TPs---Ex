# 🍽️ Restaurant Menu (JavaFX)

## 📘 Overview
This project is a **simple JavaFX GUI program** that simulates a small **restaurant menu**.  
Users can select dishes, click a button to calculate the total price, and see the result instantly.

It’s an introductory **IHM (Interface Homme–Machine)** exercise for Java programming students.

---

## 🧠 Features
- Graphical interface using **JavaFX**  
- Multiple selectable dishes using `CheckBox`  
- A `Button` to calculate the total cost  
- A `Label` to display results  
- Clean vertical layout using `VBox`

---

## 💻 Source Code

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
```

- Code Explanation (Step-by-Step)
1. Imports
java:
```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;
These lines import all required JavaFX classes:

Application: Base class for every JavaFX app.

Scene: The content area of the window.

Label, Button, CheckBox: UI elements.

VBox: A vertical layout manager.

Stage: Represents the main window.
```

2. Class Definition
java:
```java
public class RestaurantMenu extends Application {
We extend the Application class so that the JavaFX runtime can launch our interface.
```

3. The start() Method
java:
```java
public void start(Stage stage)
This method is automatically called when the program starts.
It receives a Stage object — the main window of our application.
```

4. UI Components
java:
```java
Label title = new Label("🍽️ Welcome to My Restaurant!");
CheckBox pizza = new CheckBox("Pizza - 1200 DA");
CheckBox burger = new CheckBox("Burger - 900 DA");
CheckBox salad = new CheckBox("Salad - 700 DA");
CheckBox drink = new CheckBox("Drink - 300 DA");
Button orderButton = new Button("Calculate Total");
Label result = new Label();
We create a label for the title, four menu items (checkboxes), a button, and a result label.
```

5. Button Action
java:
```java
orderButton.setOnAction(e -> {
    int total = 0;
    if (pizza.isSelected()) total += 1200;
    if (burger.isSelected()) total += 900;
    if (salad.isSelected()) total += 700;
    if (drink.isSelected()) total += 300;
    result.setText("Total = " + total + " DA");
});
v

When the user clicks the button:
- A total variable is initialized to 0.
- For each selected dish, the price is added to the total.
- The result label is updated with the final amount.

6. Layout and Styling
java:
```java
VBox root = new VBox(10, title, pizza, burger, salad, drink, orderButton, result);
root.setStyle("-fx-padding: 20; -fx-alignment: center; -fx-font-size: 14px;");
VBox arranges components vertically.
CSS style adds padding, centers everything, and sets font size.
```

7. Scene and Stage
java:
```java
Scene scene = new Scene(root, 300, 350);
stage.setScene(scene);
stage.setTitle("Restaurant Menu");
stage.show();
We attach the layout (root) to a scene, then set it inside the window (stage) and show it.
```

8. The main() Method
java:
```java
public static void main(String[] args) {
    launch(args);
}
The program starts here.
launch() calls the JavaFX runtime and executes the start() method automatically.
```

🧠 Output Example
When you run the program, you’ll see:


🍽️ Welcome to My Restaurant!
☑️ Pizza - 1200 DA
☐ Burger - 900 DA
☑️ Drink - 300 DA
[Calculate Total]

Result = 1500 DA
🧩 How to Run
1. Compile
   ```bash
javac RestaurantMenu.java
```

2. Run
   ```bash
java RestaurantMenu
```
✅ Make sure JavaFX SDK is configured in your IDE or classpath.

🚀 Ideas for Improvement
Add a MenuBar (File, Help, Exit)

Add images for each dish (ImageView)

Add quantity fields for each item

Add a reset button to clear selections

Display a summary of selected items

📚 Educational Purpose
This project demonstrates:

GUI creation using JavaFX

Event handling (setOnAction)

Layout management (VBox)

Basic object-oriented design

Author: Moussaoui Aboubaker
Course: IHM (Interface Homme-Machine)
Language: Java (JavaFX)


---

Would you like me to make a **French version** of this README (for your IHM course submission)?
