package randomizer;

public class Sobek extends godClass{ 
    public Sobek() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Sobek test = new Sobek();
    System.out.println(test.getDamageType());
    }
}
