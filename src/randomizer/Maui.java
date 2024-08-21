package randomizer;

public class Maui extends godClass{ 
    public Maui() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Maui test = new Maui();
    System.out.println(test.getDamageType());
    }
}
