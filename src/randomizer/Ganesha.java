package randomizer;

public class Ganesha extends godClass{ 
    public Ganesha() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Ganesha test = new Ganesha();
    System.out.println(test.getDamageType());
    }
}
