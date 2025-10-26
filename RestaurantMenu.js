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
