package randomizer;

public class Tiamat extends godClass{ 
    public Tiamat() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Tiamat test = new Tiamat();
    System.out.println(test.getDamageType());
    }
}
